export const WIDGET_TYPES = [
  { type: "date", label: "Date" },
  { type: "weather", label: "Weather" },
  { type: "news", label: "News" },
];

// A type for the renderWidget function
export type RenderWidget = (type: string, index: number) => React.ReactNode;
export interface MobileWidgetProps {
  renderWidget: RenderWidget;
  activeWidgets: string[];
  addWidget: (widgetType: string) => void;
  sliderSettings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    arrows: boolean;
  };
}
export interface DesktopWidgetProps {
  renderWidget: RenderWidget;
  activeWidgets: string[];
  addWidget: (widgetType: string) => void;
  onDragEnd: (result: any) => void;
}

const nepaliDigits: Record<string, string> = {
  "0": "०",
  "1": "१",
  "2": "२",
  "3": "३",
  "4": "४",
  "5": "५",
  "6": "६",
  "7": "७",
  "8": "८",
  "9": "९",
};

// function convertToNepaliDigits(input: string): string {
//   return input.replace(/\d/g, (digit) => nepaliDigits[digit]);
// }
export type date = {
  year: string;
  month: string;
  day: string;
  week: string;
};
