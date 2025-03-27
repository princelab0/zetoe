import { cn } from "@/lib/utils";
import { SelectItem } from "../ui/select";
import { Model } from "./proptmode-map";

export const ModelItem: React.FC<{ model: Model; disabled?: boolean }> = ({
  model,
  disabled,
}) => {
  let modelContentClassName;
  if (model.name === "Web") modelContentClassName = "text-green-600";
  if (model.name === "Grammar") modelContentClassName = "text-yellow-600";
  if (model.name === "Research") modelContentClassName = "text-blue-600";
  if (model.name === "Writing") modelContentClassName = "text-purple-600";
  if (model.name === "Translation") modelContentClassName = "text-pink-600";
  // if (model.name === "Coding") modelContentClassName = "text-fuchsia-600";

  return (
    <SelectItem
      key={model.value}
      value={model.value}
      className={cn(
        "flex flex-col items-start px-2 py-3 rounded-lg ",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <div className='flex items-center space-x-3 text-gray-600'>
        {model.icon}
        <div className='flex flex-col text-base '>
          <span className={cn(modelContentClassName)}>{model.name}</span>
          <span>{model.description}</span>
        </div>
      </div>
    </SelectItem>
  );
};
