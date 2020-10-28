export const getClassName = (
  arg: { common: string; unique: string },
  modifier: string
): string => {
  if (!modifier) return `${arg.common} ${arg.unique}`

  return `${arg.common}__${modifier} ${arg.unique}__${modifier}`
}
