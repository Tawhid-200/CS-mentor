import { NextRequest, NextResponse } from "next/server";
import { quran } from "@/lib/quran";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const results = await quran.search.search(slug);
  return NextResponse.json({ results });
}
