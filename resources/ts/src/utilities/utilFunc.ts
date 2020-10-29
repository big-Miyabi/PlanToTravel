export const getClassName = (
  arg: { common: string; unique: string },
  modifier: string
): string => {
  if (!modifier) return `${arg.common} ${arg.unique}`

  return `${arg.common}__${modifier} ${arg.unique}__${modifier}`
}

export const addValueIntoInput = (
  ref: React.RefObject<HTMLInputElement>,
  value: string
): void => {
  const input = ref.current
  if (!input) return
  input.value = value
}

export const checkObjEqual = (a: Object, b: Object) => { // eslint-disable-line
  const aJSON = JSON.stringify(Object.entries(a).sort())
  const bJSON = JSON.stringify(Object.entries(b).sort())

  return aJSON === bJSON
}

// ヒュベニの公式
export const getDistanceByHubeny = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): string => {
  const rad = (deg: number): number => {
    return (deg * Math.PI) / 180
  }
  //degree to radian
  lat1 = rad(lat1)
  lng1 = rad(lng1)
  lat2 = rad(lat2)
  lng2 = rad(lng2)

  // 緯度差
  const latDiff = lat1 - lat2
  // 経度差算
  const lngDiff = lng1 - lng2
  // 平均緯度
  const latAvg = (lat1 + lat2) / 2.0
  // 赤道半径
  const a = 6378137.0
  // 極半径
  const b = 6356752.314140356
  // 第一離心率^2
  const e2 = 0.00669438002301188
  // 赤道上の子午線曲率半径
  const a1e2 = 6335439.32708317

  const sinLat = Math.sin(latAvg)
  const W2 = 1.0 - e2 * (sinLat * sinLat)

  // 子午線曲率半径M
  const M = a1e2 / (Math.sqrt(W2) * W2)
  // 卯酉線曲率半径
  const N = a / Math.sqrt(W2)

  const t1 = M * latDiff
  const t2 = N * Math.cos(latAvg) * lngDiff

  const distanceM = Math.sqrt(t1 * t1 + t2 * t2)
  const distanceKm =
    Math.round((distanceM / 1000) * 10) / 10

  return distanceM >= 1000
    ? `直線距離 ${distanceKm} km`
    : `直線距離 ${Math.floor(distanceM)} m`
}
