import { MapPin, BookOpen } from "lucide-react";

interface SurahProps {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
}

export const SurahSuggestion = ({ data }: { data: SurahProps }) => {
  return (
    <div
      className="flex items-center justify-between bg-zinc-900/70 rounded-md p-3 cursor-pointer hover:bg-zinc-900/90 transition-all ease-in"
      //   onClick={() => setItem(query)}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 border-4 border-zinc-800 rounded-full text-sm font-medium">
          {data.number}
        </div>
        <h1 className="text-base">Surah {data.englishName}</h1>
      </div>
      <div>
        <div className="flex items-center gap-1 text-xs font-light text-foreground/60 pb-1">
          <BookOpen size={13} />
          <p>{data.numberOfAyahs} Ayah</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-foreground/50">
          <MapPin size={13} />
          <p>{data.revelationType}</p>
        </div>
      </div>
    </div>
  );
};
