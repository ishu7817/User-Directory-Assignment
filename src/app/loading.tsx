import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full h-full p-10 grid grid-cols-2 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            className="h-fit max-w-[40vw] min-w-100 bg-white/30"
          >
            {/* Header: Avatar + (Name & Email) + View More */}
            <CardHeader className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <Skeleton className="w-18 h-18 rounded-full" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-6 w-36" />
                  <Skeleton className="h-4 w-44" />
                </div>
              </div>
              <Skeleton className="h-4 w-16" />
            </CardHeader>

            {/* Content: Company Catchphrase */}
            <CardContent>
              <Skeleton className="h-4 w-3/4 mt-4" />
            </CardContent>

            {/* Footer: Website & Visit link */}
            <CardFooter>
              <div className="w-full flex justify-between items-center">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-12" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}