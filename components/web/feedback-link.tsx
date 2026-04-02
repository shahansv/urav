"use client";

import Link from "next/link";
import { toast } from "sonner";

interface FeedbackLinkProps {
  href: string;
  text?: string;
  className?: string;
}

export function FeedbackLink({
  href,
  text = "Select a different theyyam story",
  className = "hover:underline hover:animate-pulse",
}: FeedbackLinkProps) {
  const handleClick = () => {
    toast("Enjoying the stories?", {
      description: "We'd love to hear what you think about Pakarnaattam.",
      action: {
        label: "Give Feedback",
        onClick: () => window.dispatchEvent(new Event("open-feedback-dialog")),
      },
      duration: 5000,
      classNames: {
        description: "!text-muted-foreground",
      },
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {text}
    </Link>
  );
}
