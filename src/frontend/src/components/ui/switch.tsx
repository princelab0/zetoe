"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full  shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full shadow-lg transition-transform",
        // Checked state: Blue-filled ring
        "data-[state=checked]:translate-x-6 data-[state=checked]:bg-blue-400 data-[state=checked]:ring-2 data-[state=checked]:ring-blue-400",
        // Unchecked state: Gray-filled ring
        "data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-gray-300 data-[state=unchecked]:ring-2 data-[state=unchecked]:ring-gray-300"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
