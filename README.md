# Zetoe
<img src="/docs/cover_image.png" alt="Alt text" width="700" height="530">

---
An AI-driven, distraction-free search engine and browser-based agent.

### Quick Start
The easiest way to start the Dify server is through Docker Compose. Before running Zetoe, ensure that Docker and Docker Compose are installed on your machine, then run the following commands:
```
git clone https://github.com/princelab0/zetoe.git
cd zetoe
cp .env.example .env
docker-compose up -d
```
After running, you can access Zetoe at http://localhost:3000.


### Core features

🔍 **Web Search Integration**
Leverages search APIs to deliver real-time answers using up-to-date web data and LLM. Ideal for dynamic queries requiring current information.

🖼️ **Image Discovery**
Retrieves visual content from integrated image APIs (e.g., Unsplash/Openverse) with contextual relevance ranking.

🛠️ **Specialized Modes**

-Research Mode: Context-aware filters for academic/technical queries

-Writing Mode: AI-assisted drafting with style/grammar checks

-Translation Mode: On-the-fly multilingual support (65+ languages)

📊 **Smart Widgets**
Customizable dashboard components showing trending topics, quick-access tools, and real-time data visualizations.

🌐 **News Explorer**
Curated news aggregation from verified sources, with initial focus on Nepali media outlets (Kathmandu Post, Online Khabar).

🌍 **Multilingual UI**
Supports 12 interface languages with automatic content localization.

⚙️ **Customization Hub**
-Theme toggling (dark/light/system)
-Search preference profiles


🎨 **Theme Engine**
CSS-powered appearance customization with community template sharing.

🔒 **Auth System**
-Prebuilt Supabase integration for:
-OAuth/email login flows
-Encrypted session management
-User preference sync


### Roadmap

- [x] Web search  
- [x] Image search  
- [x] Research mode  
- [x] Writing, translation, and grammar mode  
- [x] Explore page  
- [x] Authentication  
- [x] Theme management  
- [x] Different model options  
- [ ] Image upload  
- [ ] File upload  
- [ ] Image generation


### How to Contribute?
