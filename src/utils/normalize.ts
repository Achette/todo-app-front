export const normalizeForSave = (term: string): string => {
  return term
    .toLocaleUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[`'~]/g, '')
}
