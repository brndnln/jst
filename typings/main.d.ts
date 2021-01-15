interface lolcatConfig {
  animate?: boolean
  duration?: number
  seed?: number
  speed?: number
  spread?: number
  freq?: number
  colors?: boolean
}
declare function getArrayPos (search: any, array: any[]): number
declare function rainbow (text: string, config?: lolcatConfig): string
declare const ArrayTools: {
  getArrayPos: typeof getArrayPos
}
export { getArrayPos, ArrayTools, rainbow, lolcatConfig }
