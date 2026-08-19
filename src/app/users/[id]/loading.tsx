import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
     
      <Card className="py-15 my-auto mx-auto max-w-[40vw] min-w-100 bg-white">
        
        
        <CardHeader>
          <div className="flex items-center gap-4">
            <Skeleton className="w-30 h-30 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </CardHeader>


        <CardContent>
          <Skeleton className="h-4 w-3/4" />
        </CardContent>

        <Separator />

      
        <div className="px-4 py-4 space-y-4">
          <Skeleton className="h-5 w-24 mb-2" />
          {[1, 2].map((i) => (
            <div key={i} className="py-2 flex justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-32" />
            </div>
          ))}
        </div>

        <Separator />

        
        <CardFooter className="flex justify-between">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </CardFooter>
      </Card>
    </div>
  );
}