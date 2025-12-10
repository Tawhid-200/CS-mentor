"use server";
import { quran } from "@/lib/quran";

export const Test = async () => {
  const chapters = await quran.chapters.findAll();
  console.log(chapters);
  return <h1>server test component</h1>;
};
