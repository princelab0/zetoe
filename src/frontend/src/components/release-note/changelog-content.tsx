// components/release-note/changelog-content.tsx
"use client"; // Match ChangelogEntry

import ChangelogEntry from "@/components/release-note/changelog-entry";
import { ChangelogEntry as ChangelogEntryType } from "@/lib/changelog-data";

interface ChangelogContentProps {
  activeEntry: ChangelogEntryType;
}

export default function ChangelogContent({
  activeEntry,
}: ChangelogContentProps) {
  return (
    <ChangelogEntry
      date={activeEntry.date}
      introduction={activeEntry.introduction}
      items={activeEntry.items}
    />
  );
}
