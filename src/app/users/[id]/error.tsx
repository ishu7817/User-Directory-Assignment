"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logs the full error report to your console / logging service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="p-3 bg-red-500/10 rounded-full mb-4">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>

      <h2 className="text-2xl font-bold tracking-tight mb-2">
        Something went wrong!
      </h2>

      <p className="text-muted-foreground text-sm max-w-md mb-4">
        {error.message || "An unexpected error occurred while loading this page."}
      </p>

      {/* Displays server reference code only when available */}
      {error.digest && (
        <span className="text-xs font-mono text-muted-foreground/60 bg-muted px-2.5 py-1 rounded-md mb-6">
          Digest: {error.digest}
        </span>
      )}

      <Button onClick={() => reset()} variant="outline">
        Try Again
      </Button>
    </div>
  );
}