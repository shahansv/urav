import { Header } from "@/components/web/header";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#121212] min-h-screen">
      <Header />
      {children}
    </div>
  );
}
