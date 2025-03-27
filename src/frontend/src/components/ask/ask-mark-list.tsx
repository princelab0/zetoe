import Link from "next/link";
export default function AskMarkList({
  linkHref,
  title,
}: {
  linkHref: string;
  title: string;
}) {
  return (
    <li className='flex font-[400] items-center gap-2 p-2 mx-2 dark:hover:bg-neutral-700 hover:scale-105  hover:bg-[hsl(60,4%,91%)] cursor-pointer rounded-lg transition-transform '>
      {/* svg */}

      <Link
        href={linkHref}
        className='text-[hsl(180,3%,13%)] dark:text-[hsl(60,4%,91%)]  text-sm'
      >
        {title}
      </Link>
    </li>
  );
}
