import { ReactNode } from "react";

export default function PakarnaattamLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-black text-neutral-200 min-h-screen">{children}</div>
  );
}
