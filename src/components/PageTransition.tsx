import { ViewTransition } from "react";

// Wraps a page's <main> so route changes crossfade. Lives in each page.tsx
// rather than layout.tsx, because layouts persist and never enter or exit.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewTransition default="page">{children}</ViewTransition>;
}
