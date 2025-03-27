# Dockerfile for building the standalone image

# ------------------------------------------------------------------------------
# Base Image and Environment Setup
# ------------------------------------------------------------------------------
FROM buildpack-deps:buster as builder
LABEL authors="Princelab"

# Set various environment variables for Python and locale settings
ENV PYTHON_VERSION=3.11.8 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=utf-8 \
    LANG=C.UTF-8 \
    PYTHONPATH=/workspace/src/ \
    VIRTUAL_ENV=/workspace/.venv \
    PATH="$VIRTUAL_ENV/bin:$PATH" \
    POETRY_VIRTUALENVS_IN_PROJECT=true

# Clean up any cached files from apt-get
RUN apt-get autoclean

# ------------------------------------------------------------------------------
# Install Python from source
# ------------------------------------------------------------------------------
RUN cd /usr/src && \
    wget https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz && \
    tar -xzf Python-$PYTHON_VERSION.tgz && \
    cd Python-$PYTHON_VERSION && \
    ./configure --enable-optimizations && \
    make install && \
    ldconfig && \
    rm -rf /usr/src/Python-$PYTHON_VERSION.tgz /usr/src/Python-$PYTHON_VERSION && \
    update-alternatives --install /usr/bin/python python /usr/local/bin/python3 1

# ------------------------------------------------------------------------------
# Install Poetry for Dependency Management
# ------------------------------------------------------------------------------
RUN pip3 install --no-cache-dir poetry

# Set working directory for application files
WORKDIR /workspace

# Copy dependency files first to leverage Docker caching
COPY pyproject.toml poetry.lock ./

# Install Python dependencies using Poetry
RUN poetry install

# Copy backend source code into the container
COPY src/backend src/backend

# ------------------------------------------------------------------------------
# Install Node.js and Frontend Build Tools
# ------------------------------------------------------------------------------
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm && \
    npm install -g pm2  # Install pm2 for starting the frontend

# Build the frontend application
WORKDIR /workspace/src/frontend

# Copy package files to leverage caching for dependency installation
COPY src/frontend/package.json src/frontend/pnpm-lock.yaml ./

# Install frontend dependencies using pnpm
RUN pnpm install

# Copy the remaining frontend source code and build the project
COPY src/frontend/ .
RUN pnpm build

# ------------------------------------------------------------------------------
# SearxNG Installation and Setup
# ------------------------------------------------------------------------------
WORKDIR /workspace/searxng

# Install system dependencies required by SearxNG and its components
RUN apt-get install -y \
    python3-dev python3-babel python3-venv \
    uwsgi uwsgi-plugin-python3 \
    git build-essential libxslt-dev zlib1g-dev libffi-dev libssl-dev

# Clone the SearxNG repository into the working directory
RUN git clone https://github.com/searxng/searxng.git .

# Upgrade pip and install essential Python packaging tools
RUN pip3 install -U pip setuptools wheel pyyaml

# Install the SearxNG Python package
RUN pip3 install .

# Copy SearxNG configuration files into the container
COPY /searxng/uwsgi.ini /workspace/searxng/uwsgi.ini
COPY /searxng/settings.yml /workspace/searxng/settings.yml
COPY /searxng/limiter.toml /workspace/searxng/limiter.toml

# ------------------------------------------------------------------------------
# Setup Entrypoint and Exposed Ports
# ------------------------------------------------------------------------------
# Copy the entrypoint script and environment defaults, then make the script executable
COPY /docker-scripts/entrypoint.sh /workspace/sbin/entrypoint.sh
COPY /docker-scripts/env-defaults /workspace/env-defaults
RUN chmod +x /workspace/sbin/entrypoint.sh

# Expose necessary ports for the application
EXPOSE 8000  # Backend
EXPOSE 3000  # Frontend
EXPOSE 8080  # Additional service port

# Set the entrypoint for the container
ENTRYPOINT ["/workspace/sbin/entrypoint.sh"]
