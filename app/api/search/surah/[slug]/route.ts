import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,

  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    const res = await fetch(
      `https://api.qurani.ai/gw/qh/v1/surah/${slug}?limit=2000&offset=0`
    );
    if (!res.ok) return { message: "Network error", status: 422 };
    const data = await res.json();
    const { name, englishName, numberOfAyahs, revelationType, number } =
      data.data;
    return NextResponse.json({
      type: "surah",
      number,
      name,
      englishName,
      numberOfAyahs,
      revelationType,
    });
  } catch (error: any) {
    console.error("Somthing went wrong", error);
    return NextResponse.json({ message: error, status: 422 });
  }
}
