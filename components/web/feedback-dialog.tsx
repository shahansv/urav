"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { addIdea } from "@/lib/api";

export function FeedbackDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = () => setDialogOpen(true);
    window.addEventListener("open-feedback-dialog", handler);
    return () => window.removeEventListener("open-feedback-dialog", handler);
  }, []);

  const validate = () => {
    if (!name || !email || !thoughts) {
      toast.error("All fields are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitting(true);

    try {
      const promise = addIdea({ name, email, idea: thoughts });

      await toast.promise(promise, {
        loading: "Submitting feedback...",
        success: "Thank you for your feedback!",
        error: (err) => err.message || "Something went wrong",
      });

      setDialogOpen(false);
      setName("");
      setEmail("");
      setThoughts("");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSkip = () => {
    setDialogOpen(false);
    setName("");
    setEmail("");
    setThoughts("");
  };

  const inputClass =
    "w-full rounded-lg bg-[#1a1a1a] px-4 py-3 text-white text-sm placeholder:text-neutral-500 outline-none focus:ring-1 focus:ring-neutral-700 transition resize-none";

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogContent className="bg-black border border-neutral-900 rounded-2xl p-6  w-full gap-0">
        <AlertDialogHeader className="mb-4">
          <AlertDialogTitle className="text-white text-xl font-semibold">
            Feedback
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <textarea
            placeholder="Thoughts......"
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            rows={4}
            className={inputClass}
          />
        </div>

        <AlertDialogFooter className="mt-5 bg-black border-0 flex flex-row justify-between items-center sm:justify-between mx-8">
          <button
            onClick={handleSkip}
            className="text-white text-sm hover:text-neutral-400 transition cursor-pointer"
          >
            Skip
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="text-white text-sm hover:text-neutral-400 transition disabled:opacity-50 cursor-pointer"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
