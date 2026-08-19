import React from "react";
import { notFound } from "next/navigation";
import { getUserById, getUsers } from "@/lib/api";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Params } from "next/dist/server/request/params";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [user, allUsers] = await Promise.all([getUserById(id), getUsers()]);
  if (!user || !user.id) {
    notFound();
  }
  const totalUsers = allUsers.length;
  const isLastUser = user.id >= totalUsers;
  const isFirstUser = user.id === 1;

  const contactDetails = [
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
  ];

  const addressDetails = [
    { label: "Street", value: user.address.street },
    { label: "Suite", value: user.address.suite },
    { label: "City", value: user.address.city },
    { label: "Zipcode", value: user.address.zipcode },
  ];

  const companyDetails = [
    { label: "Company", value: user.company.name },
    { label: "Catchphrase", value: user.company.catchPhrase },
    { label: "Business", value: user.company.bs },
  ];
  return (
    <div className=" min-h-screen ">
      <Link href ="/" className=" md:flex whitespace-nowrap  hidden  items-center absolute left-5 top-5 underline hover:scale-95 text-white/50 hover:text-white text-sm cursor-pointer transition-all duration-75">
   
        <ArrowLeft className="h-3 w-3" /> Back to Directory
      </Link>
      <Card
        key={user.id}
        className=" py-15 rounded-0 min-h-full my-auto mx-auto  max-w-[40vw] min-w-100 bg-mist-900 text-white/90 border-zinc-800 "
      >
        <CardHeader>
          <div className="flex items-center gap-4 ">
            <Avatar className="w-30 h-30">
              <AvatarImage
                src={`https://randomuser.me/api/portraits/${user.id % 2 === 0 ? "women" : "men"}/${user.id}.jpg`}
                alt={user.name}
              />
              <AvatarFallback>
                {user.name?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className=" text-[24px] font-bold">
                {user.name}
              </CardTitle>
              <CardDescription className="pt-2">
                {user.username}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-white/90 text-[16px]   ">
            {user.company.catchPhrase}
          </p>
        </CardContent>

        <Separator />
        <Separator />
        <div className=" w-full flex justify-between px-4">
          <span className="font-bold text-[20px] text-white/90">Website</span>
          <span className="inline-flex text-sm items-center gap-1 hover:opacity-70 hover:scale-95 cursor-pointer transition-all duration-75">
            <p>{user.website} </p> <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
        <Separator />
        <Separator />
        <div className="px-4">
          <h2 className="text-[20px] ">Contact</h2>

          {contactDetails.map((item, index) => (
            <div key={item.label} className="py-2 flex justify-between">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        <Separator />
        <div className="px-4">
          <h2 className="text-[20px] ">Address</h2>

          {addressDetails.map((item, index) => (
            <div key={item.label} className="py-2 flex justify-between">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="px-4">
          <h2 className="text-[20px] ">Company</h2>

          {companyDetails.map((item, index) => (
            <div key={item.label} className="py-2 flex justify-between">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        <CardFooter className="flex justify-between">
          {!isFirstUser && (
            <Link
              className=" flex items-center text-white/80 underline font-mono"
              href={`${user.id - 1}`}
            >
              <ArrowLeft className="h-3 w-3" /> Previous
            </Link>
          )}

          {!isLastUser && (
            <Link
              className=" flex items-center text-white/80 underline font-mono "
              href={`${user.id + 1}`}
            >
              Next <ArrowRight className="h-3 w-3" />{" "}
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
