// app/search/[id]/page.tsx
import { redirect } from "next/navigation";
import ChatPageClient from "./chat-page-client";

export default async function SearchThreadPage({ params }: any) {
  const threadId = parseInt(params.id, 10);

  // Temporary validation logic (replace with backend check later)
  const isValidThread = await someTemporaryValidationLogic(threadId);

  // If threadId is invalid or unauthorized, redirect to /search
  if (!isValidThread || isNaN(threadId)) {
    redirect("/");
  }

  // Pass the validated threadId to the client component
  return <ChatPageClient threadId={threadId} />;
}

// Mock validation function (replace with real backend logic later)
async function someTemporaryValidationLogic(
  threadId: number
): Promise<boolean> {
  // For now, return false to block manual access until backend is ready
  // Later, fetch from your backend to verify thread ownership
  return false;
}
