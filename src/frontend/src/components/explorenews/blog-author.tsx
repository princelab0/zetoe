import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ImageSelector, capitalizeFirstLetter } from "./utils";
import { Heart } from "lucide-react";

export default function BlogAuthor({ author, likes }: any) {
  return (
    <div className='w-full flex flex-wrap justify-between items-center gap-y-1'>
      <div className='flex items-center gap-1'>
        <Avatar className='w-5 h-5'>
          <AvatarImage src={ImageSelector(author)?.src}></AvatarImage>
          <AvatarFallback>Lg</AvatarFallback>
        </Avatar>
        <span className='text-[16px] font-medium'>
          {capitalizeFirstLetter(author)}
        </span>
      </div>

      <div className='flex items-center gap-1'>
        <span>
          <Heart fill='#f73056' strokeWidth={0} className='w-5 h-5' />
        </span>
        <span className='text-sm'>{likes} </span>
      </div>
    </div>
  );
}
