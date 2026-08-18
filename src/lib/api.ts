import { User } from "@/types/user";
import { error } from "console";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Unable to fetch user data");
  }
  return res.json();
}
export async function getUserById(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Unable to fetch user data");
  }
  return res.json();
}
