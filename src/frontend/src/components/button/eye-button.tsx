import { Eye, EyeOff } from "lucide-react";

interface EyeButtonProps {
  field: any;
  showPassword: any;
  togglePasswordVisibility: any;
}

export default function EyeButton({
  field,
  togglePasswordVisibility,
  showPassword,
}: EyeButtonProps) {
  return (
    <button
      type='button'
      onClick={() => togglePasswordVisibility(field)}
      className='absolute right-3 top-1/2 transform translate-y-1/2 text-gray-600 dark:text-gray-300'
    >
      {showPassword[field] ? <Eye size={14} /> : <EyeOff size={14} />}
    </button>
  );
}
