import { PromptMode } from "generated";
import {
  Code,
  Globe,
  Languages,
  SpellCheck,
  Telescope,
  WandSparklesIcon,
} from "lucide-react";

export type Model = {
  name: string;
  description: string | null;
  value: string;
  smallIcon: React.ReactNode;
  icon: React.ReactNode;
};
export const promptModeMap: Record<PromptMode, Model> = {
  [PromptMode.Web]: {
    name: "Web",
    description: null,
    value: PromptMode.Web,
    smallIcon: (
      <Globe className='w-4 h-4  text-green-600 hover:text-green-400' />
    ),
    icon: <Globe className='w-5 h-5 text-green-600  ' />,
  },
  [PromptMode.Research]: {
    name: "Research",
    description: null,
    value: PromptMode.Research,
    smallIcon: (
      <Telescope className='w-4 h-4 text-blue-600  hover:text-blue-400' />
    ),
    icon: <Telescope className='w-5 h-5 text-blue-600   ' />,
  },
  [PromptMode.Writing]: {
    name: "Writing",
    description: null,
    value: PromptMode.Writing,
    smallIcon: (
      <WandSparklesIcon className='w-4 h-4 text-purple-600 hover:text-purple-400 ' />
    ),
    icon: <WandSparklesIcon className='w-5 h-5 text-purple-600 ' />,
  },
  [PromptMode.Grammar]: {
    name: "Grammar",
    description: null,
    value: PromptMode.Grammar,
    smallIcon: (
      <SpellCheck className='w-4 h-4 text-yellow-600 hover:text-yellow-600  ' />
    ),
    icon: <SpellCheck className='w-5 h-5 text-yellow-600 ' />,
  },
  [PromptMode.Translation]: {
    name: "Translation",
    description: null,
    value: PromptMode.Translation,
    smallIcon: (
      <Languages className='w-4 h-4 text-pink-600  hover:text-pink-600 ' />
    ),
    icon: <Languages className='w-5 h-5 text-pink-600 ' />,
  },
  // [PromptMode.Coding]: {
  //   name: "Coding",
  //   description: null,
  //   value: PromptMode.Coding,
  //   smallIcon: (
  //     <Code className='w-4 h-4  text-fuchsia-600 hover:text-fuchsia-600' />
  //   ),
  //   icon: <Code className='w-5 h-5  text-fuchsia-600 ' />,
  // },
};
