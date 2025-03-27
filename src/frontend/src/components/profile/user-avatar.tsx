import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserAvatar({
  nameFirstLetter,
  imgUrl,
}: {
  nameFirstLetter: string;
  imgUrl: string | undefined;
}) {
  return (
    <Avatar className='w-6 h-6 my-auto'>
      <AvatarImage className='w-6 h-6 my-auto' src={imgUrl} />
      <AvatarFallback className='rounded-full !pb-3.5 pointer-events-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-black overflow-hidden !w-8 !h-8  dark:text-neutral-50 p-2 border-none  focus:outline-dashed align-middle'>
        {nameFirstLetter}
      </AvatarFallback>
    </Avatar>
  );
}
