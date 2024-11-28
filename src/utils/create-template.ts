type CSSValue = string
type CSSSelector = string
type CSSObject = {
  [key: CSSSelector]: CSSValue | CSSObject
}

export function toChildString(styles: CSSObject, parentSelectors: string[] = []): string {
  let result = ''
  for (const [key, value] of Object.entries(styles)) {
    const currentSelectors = [...parentSelectors]

    if (parentSelectors.length > 0) {
      currentSelectors[currentSelectors.length - 1] += ` ${key}`
    } else {
      currentSelectors.push(key)
    }

    if (typeof value === 'string') {
      result += `(${currentSelectors.join(' ')}): ${value};\n`
    } else if (typeof value === 'object' && value !== null) {
      result += toChildString(value, currentSelectors)
    }
  }

  return result
}

export function fromChildString(inputString: CSSValue): CSSObject {
  const result: CSSObject = {}
  const regex = /\((.*?)\):\s*([^;]+);/g
  //const matches = [...inputString.matchAll(regex)]

  let match: RegExpExecArray | null

  while ((match = regex.exec(inputString))) {
    const [, key, value] = match

    result[key] = value
  }

  //matches.forEach(match => {
  //})
  return result
}
