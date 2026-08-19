import React from "react";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getUserById, getUsers } from "@/lib/api";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
//
//
//
//

export default async function home() {
  const users = await getUsers();
  if (!users) {
    notFound();}

  //
  //
  //
  //
  return (
    <div className="min-h-screen w-full ">
      <div className="w-full h-full p-10 grid m-5  justify-center min-[900px]:grid-cols-2 row- gap-5 ">
        {users.map((user) => (
          <Card
            key={user.id}
            className="h-fit sm:w-full md:max-w-[40vw] min-w-100  bg-white/30 "
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-18 h-18">
                  <AvatarImage
                    src={`https://randomuser.me/api/portraits/${user.id % 2 === 0 ? "women" : "men"}/${user.id}.jpg`}
                    alt={user.name}
                  />
                  <AvatarFallback>
                    {user.name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-">
                  <CardTitle className=" text-[24px] font-bold">
                    {user.name}
                  </CardTitle>
                  <CardDescription className="pt-2">
                    {user.email}
                  </CardDescription>
                </div>
              </div>
              <Link href={`/users/${user.id}`}>
                {" "}
                <CardAction className="hover:opacity-70 hover:scale-95 cursor-pointer transition-all duration-75 underline">
                  {" "}
                  view more{" "}
                </CardAction>
              </Link>
            </CardHeader>
            <CardContent>
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
        ))}
      </div>
    </div>
  );
}
