export function searchWithRegex(text: string, searchTerm: string): boolean {
  const normalizedText = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const normalizedSearch = searchTerm
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const regex = new RegExp(normalizedSearch, "gi");

  return regex.test(normalizedText);
}
