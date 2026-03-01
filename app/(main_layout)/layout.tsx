import { Header } from "@/components/web/header";
import SmoothScrollProvider from "@/components/web/smooth_scroll_provider";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#121212] min-h-screen">
      <SmoothScrollProvider>
        <Header />
        {children}
      </SmoothScrollProvider>
    </div>
  );
}
