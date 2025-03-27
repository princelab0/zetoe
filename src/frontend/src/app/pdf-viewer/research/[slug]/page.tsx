// app/pdf-viewer/[research]/page.jsx
"use client";

import PdfCardGrid from "@/components/ask/pdf-card-modal";
import { useParams } from "next/navigation";

export default function PdfViewerPage() {
  const params = useParams();
  const pdfName = params?.research;

  if (!pdfName) {
    return <div>Loading or invalid URL...</div>;
  }

  return (
    <section className='w-full min-h-screen bg-gray-100 flex flex-col min-w-[320px] p-4'>
      <h1 className='text-2xl font-bold mb-4'>PDF Documents</h1>
      <PdfCardGrid />
    </section>
  );
}
