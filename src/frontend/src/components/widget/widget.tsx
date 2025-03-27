"use client";

import { useState, useEffect } from "react";
import DateDisplay from "./date-display";
import WeatherDisplay from "./weather-display";
import NewsDisplay from "./news-display";
import { useWidgetStore } from "@/stores/index";
import { RenderWidget } from "./data";
import MobileWidget from "./mobile-widget";
import DesktopWidget from "./desktop-widget";

const WIDGET_ORDER_KEY = "widgetOrder";

export default function Widget() {
  const { activeWidgets, setActiveWidgets, isWidgetVisible } = useWidgetStore();
  const [isMobile, setIsMobile] = useState(false);

  // Initialize activeWidgets from localStorage on component mount
  useEffect(() => {
    const savedWidgetOrder = localStorage.getItem(WIDGET_ORDER_KEY);
    if (savedWidgetOrder && activeWidgets.length === 0) {
      setActiveWidgets(JSON.parse(savedWidgetOrder));
    } else if (activeWidgets.length === 0) {
      // Default widgets if no saved order exists and state is empty
      setActiveWidgets(["date", "weather", "news"]);
    }
  }, [setActiveWidgets]); // Run only once on mount

  // Save widget order to localStorage whenever it changes
  useEffect(() => {
    if (activeWidgets.length > 0) {
      localStorage.setItem(WIDGET_ORDER_KEY, JSON.stringify(activeWidgets));
    }
  }, [activeWidgets]);

  // Change screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle adding widget
  const addWidget = (widgetType: string) => {
    if (!activeWidgets.includes(widgetType)) {
      setActiveWidgets([...activeWidgets, widgetType]);
    }
  };

  // Handle removing widget
  const removeWidget = (widgetType: string) => {
    setActiveWidgets(activeWidgets.filter((type) => type !== widgetType));
  };

  // Handle rendering widget when removing widget
  const renderWidget: RenderWidget = (type: string, index: number) => {
    const props = {
      onRemove: () => removeWidget(type),
      index,
    };

    switch (type) {
      case "date":
        return <DateDisplay key={type} {...props} />;
      case "weather":
        return <WeatherDisplay key={type} {...props} />;
      case "news":
        return <NewsDisplay key={type} {...props} />;
      default:
        return null;
    }
  };

  // Handle dragging of widget
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(activeWidgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setActiveWidgets(items);
  };

  // Do not show widget if not visible
  if (!isWidgetVisible) return null;

  // Slider implementation for mobile
  if (isMobile) {
    const sliderSettings = {
      dots: true,
      infinite: activeWidgets.length > 1,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: activeWidgets.length > 1,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
      <MobileWidget
        renderWidget={renderWidget}
        activeWidgets={activeWidgets}
        sliderSettings={sliderSettings}
        addWidget={addWidget}
      />
    );
  } else {
    return (
      <DesktopWidget
        renderWidget={renderWidget}
        activeWidgets={activeWidgets}
        addWidget={addWidget}
        onDragEnd={onDragEnd}
      />
    );
  }
}
