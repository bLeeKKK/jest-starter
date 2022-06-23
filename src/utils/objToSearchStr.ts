const objToSearchStr = (obj: Record<string, string | number>) => {
  const keys: string[] = Object.keys(obj);
  const searchArr = keys.map(key => `${key}=${obj[key]}`)
  return searchArr.join('&')
}

export default objToSearchStr
