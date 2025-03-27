import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileWidgetProps, WIDGET_TYPES } from "./data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function MobileWidget({
  activeWidgets,
  sliderSettings,
  renderWidget,
  addWidget,
}: MobileWidgetProps) {
  return (
    <div className='mt-6 w-[calc(100%-1rem)]'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=' absolute top-[20%] -right-[0px] !h-2 !w-2 p-2 focus-visible:!ring-0 hover:!bg-neutral-100 dark:bg-neutral-900 dark:hover:!bg-neutral-900 text-neutral-950 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-600 bg-neutral-100 rounded-full'>
            <Plus className='!w-4 !h-4 text-gray-600' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {WIDGET_TYPES.map((widget) => (
            <DropdownMenuItem
              key={widget.type}
              onClick={() => addWidget(widget.type)}
              disabled={activeWidgets.includes(widget.type)}
            >
              {widget.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Slider {...sliderSettings}>
        {activeWidgets.map((type, index) => (
          <div
            key={index}
            className=' mb-2  !flex !justify-center items-center  !w-[100%]'
          >
            <div className='!w-[90%] h-20'>{renderWidget(type, index)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
