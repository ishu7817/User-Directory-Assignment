import React from 'react'
import { getUserById } from '@/lib/api'
import Link from "next/link";
import { ArrowLeft, Mail, Phone, Globe, Building2, MapPin, ArrowUpRight } from "lucide-react";

// shadcn UI Components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Params } from 'next/dist/server/request/params';

export default async function UserDetailsPage(
    {params} : {params: Promise<{ id: string }>}) {

    const {id} = await params
    const user = await getUserById(id)
  return (   
    <div className='min-h-screen w-full'>
          <Card key={user.id} className=" h-full  my-auto mx-auto  max-w-[50vw] min-w-100  bg-white/30 ">

  <CardHeader>
    <div className="flex items-center gap-4">

    <Avatar className="w-18 h-18">
<AvatarImage 
  src={`https://randomuser.me/api/portraits/${user.id % 2 === 0 ? "women" : "men"}/${user.id}.jpg`} 
  alt={user.name} 
/>
  <AvatarFallback>{user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
    <div className="flex flex-col gap-">

    <CardTitle className=" text-[24px] font-bold">{user.name}</CardTitle>
    <CardDescription className="pt-2">{user.email}</CardDescription>
  </div>
    </div>
   <Link href={`users/${user.id}`}> <CardAction className="hover:opacity-70 hover:scale-95 cursor-pointer transition-all duration-75 underline"> view more </CardAction></Link>
  
  </CardHeader>
  <CardContent >
    <p className="text-white/90 pt-4">{user.company.catchPhrase}</p>
  </CardContent>
  <CardFooter>
    <div className=" w-full flex justify-between">

    <p>{user.website} </p>

  <span className="inline-flex text-sm items-center gap-1 hover:opacity-70 hover:scale-95 cursor-pointer transition-all duration-75n">
    visit <ArrowUpRight className="h-3 w-3" />
    </span>

    </div>
  </CardFooter>
</Card>
   
    </div>
      )
}

