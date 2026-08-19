import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-md w-full text-center p-6 border border-border/40 shadow-lg">
        <CardHeader className="flex flex-col items-center gap-3">
          <div className="p-3 bg-muted rounded-full">
            <FileQuestion className="h-10 w-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">User Not Found</CardTitle>
          <CardDescription>
           The Page You're looking for does not exists
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-center pt-4">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Directory
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}