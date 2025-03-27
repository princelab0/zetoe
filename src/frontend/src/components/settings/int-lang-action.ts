"use server";
import { cookies } from "next/headers";

export default async function intLangAction(value: string) {
  (await cookies()).set("language", value);
}
