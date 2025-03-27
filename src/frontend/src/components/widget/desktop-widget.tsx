import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { WIDGET_TYPES } from "./data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DesktopWidgetProps } from "./data";

export default function DesktopWidget({
  addWidget,
  activeWidgets,
  onDragEnd,
  renderWidget,
}: DesktopWidgetProps) {
  return (
    <div className='mt-6 w-full'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='absolute top-[20%] -right-[0px] !h-2 !w-2 p-2 focus-visible:!ring-0 hover:!bg-neutral-100 dark:bg-neutral-900 dark:hover:!bg-neutral-900 text-neutral-950 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-600 bg-neutral-100 rounded-full'>
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='widgets' direction='horizontal'>
          {(provided) => (
            <div
              className='flex flex-wrap justify-center md:justify-start gap-4'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {activeWidgets.map((type, index) => (
                <Draggable key={type} draggableId={type} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='w-[calc(32%-0.5rem)] h-20 mb-4'
                    >
                      {renderWidget(type, index)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
