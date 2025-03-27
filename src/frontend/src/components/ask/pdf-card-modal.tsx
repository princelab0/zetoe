"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ArrowRight } from "lucide-react";
import { Loader2 } from "lucide-react"; // Spinner component

const pdfData = [
  {
    id: 1,
    title: "NepaliGPT 2.0",
    description: "Research paper on NepaliGPT 2.0",
    pdfPath: "/pdfs/nepaliGPT_research.pdf",
    slug: "nepaliGPT_research",
  },
];

export default function PdfCardGrid() {
  const [isClient, setIsClient] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(true); // Tracks PDF loading state

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePdfLoad = () => {
    setIsPdfLoading(false); // Set loading to false when iframe loads
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (open) {
      setIsPdfLoading(true); // Reset loading state when dialog opens
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {pdfData.map((pdf) => (
        <Card
          key={pdf.id}
          className='shadow-sm transition-shadow bg-primary-foreground'
        >
          <CardHeader className='p-4 pb-0'>
            <CardTitle className='text-gray-600 dark:text-gray-50 tracking-wider text-xl font-medium'>
              {pdf.title}
            </CardTitle>
            <CardDescription className='text-gray-500 dark:text-gray-100 text-base font-normal'>
              {pdf.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className='p-4 pt-0'>
            <Dialog onOpenChange={handleDialogOpenChange}>
              <DialogTrigger asChild>
                <Button
                  className='text-start text-sm pt-[6px] pl-0 text-blue-500 hover:no-underline hover:text-blue-400 transition-colors'
                  variant='link'
                >
                  <span>View PDF</span>{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className='max-w-4xl w-full h-[80vh]'>
                <VisuallyHidden>
                  <DialogTitle>{pdf.title}</DialogTitle>
                </VisuallyHidden>
                {/* Optional: Add DialogDescription for accessibility */}
                <VisuallyHidden>
                  <DialogDescription>
                    A preview of the {pdf.title} PDF document.
                  </DialogDescription>
                </VisuallyHidden>
                <div className='w-full h-full mt-4 relative'>
                  {isClient ? (
                    <>
                      {isPdfLoading && (
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <Loader2 className='w-8 h-8 animate-spin text-blue-500' />
                        </div>
                      )}
                      <iframe
                        src={pdf.pdfPath}
                        className='w-full h-full rounded-lg'
                        title={`PDF Viewer: ${pdf.title}`}
                        loading='lazy'
                        onLoad={handlePdfLoad} // Trigger when iframe content loads
                      />
                    </>
                  ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                      <Loader2 className='w-8 h-8 animate-spin text-blue-500' />
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
