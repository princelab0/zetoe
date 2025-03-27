"use client";
import Image from "next/image";
import { ChangelogItem } from "@/lib/changelog-data";
import ReactMarkdown from "react-markdown";

interface ChangelogEntryProps {
  date: string;
  introduction: string;
  items: ChangelogItem[];
}

export default function ChangelogEntry({
  date,
  introduction,
  items,
}: ChangelogEntryProps) {
  return (
    <article className='mb-16'>
      <h2
        className='text-3xl font-bold mb-6 text-[hsl(0,0%,18%)] dark:text-slate-100'
        id={date.replace(/,?\s+/g, "-").toLowerCase()}
      >
        {date}
      </h2>
      <p className='text-lg mb-8'>{introduction}</p>

      {items.map((item, index) => (
        <ul key={index} className='mb-12'>
          <h3 className='text-2xl font-semibold mb-4 text-[hsl(0,0%,18%)] dark:text-slate-100'>
            {`${index + 1}.${" "}${item.title}`}
          </h3>
          {item.image && (
            <div className='mb-4 relative aspect-video'>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className='rounded-lg object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
                loading='lazy'
              />
            </div>
          )}
          <div className='prose max-w-none dark:text-slate-100'>
            {/* {console.log(item.content)} */}
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </div>
        </ul>
      ))}
    </article>
  );
}
