export function parseQuery(query: string) {
  const q = query.trim();
  const isSingelNumber = /^[0-9]+$/.test(q);
  const isSelected = /^[0-9]+:[0-9]+?$/.test(q);

  if (isSelected) {
    const [surah, ayah] = q.split(":");
    return {
      type: "selected",
      surah: Number(surah),
      ayah: Number(ayah),
    };
  }
  if (isSingelNumber) return { type: "singel", value: Number(q) };
  return { type: "word", value: q };
}
