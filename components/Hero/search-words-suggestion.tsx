interface hilitedTextProps {
  text: string;
  hilite: string;
}

export const HilitedText = ({ text, hilite }: hilitedTextProps) => {
  const parts = text.split(new RegExp(`(${hilite})`, "g"));
  return (
    <p>
      {parts.map((part, i) =>
        part.toLocaleLowerCase() === hilite.toLocaleLowerCase() ? (
          <span className="font-medium">{part}</span>
        ) : (
          <span>{part}</span>
        )
      )}
    </p>
  );
};

export const SearchWordsSuggestion = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex items-start flex-col gap-2">
        {data.info.map((word: any, i: number) => (
          <HilitedText text={word.text} hilite={data.query} key={i} />
        ))}
      </div>
    </>
  );
};
