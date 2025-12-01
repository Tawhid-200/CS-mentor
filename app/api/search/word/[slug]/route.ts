import { NextRequest, NextResponse } from "next/server";

interface WordsSurahProps {}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    if (!slug) return;
    const res = await fetch(
      `https://api.qurani.ai/gw/qh/v1/search/${slug}?exactSearch=false&limit=20`
    );
    if (!res.ok) return { message: "Failed to fetch data", status: 422 };
    const data = await res.json();
    if (!data) return { message: "data not found", status: 422 };
    const { ayahs } = data.data;
    const info = ayahs.map((ayah: any) => {
      return {
        text: ayah.text,
        from: {
          surahName: ayah.surah.englishName,
          surahIndex: ayah.surah.number,
          ayah: ayah.numberInSurah,
        },
      };
    });
    return NextResponse.json({
      type: "word",
      query: slug,
      count: data.data.count,
      info,
    });
  } catch (err: any) {
    console.error("Somthing went wrong", err);
    return NextResponse.json({ message: err, status: 422 });
  }
}
