// app/pdf-viewer/research/page.jsx
"use client";

import PdfCardGrid from "@/components/ask/pdf-card-modal";

export default function ResearchPage() {
  return (
    <section className='w-full min-h-screen pt-[72px] flex flex-col items-center min-w-[320px] p-4'>
      <div className='text-2xl md:text-[2.5rem] dark:text-gray-50  text-gray-800 font-medium mb-4 w-1/2 text-center tracking-wide !leading-[1.3]'>
        Where Curiosity Meets Discovery
      </div>
      <PdfCardGrid />
    </section>
  );
}
