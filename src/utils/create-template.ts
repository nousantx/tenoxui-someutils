type CSSValue = string
type CSSSelector = string
type CSSObject = {
  [key: CSSSelector]: CSSValue | CSSObject
}

export function toChildString(styles: CSSObject, parentSelectors: string[] = []): string {
  let result = ''
  for (const [key, value] of Object.entries(styles)) {
    const currentSelectors = [...parentSelectors]

    if (key.startsWith('.') || key.startsWith('#')) {
      currentSelectors.push(key)
    } else if (parentSelectors.length > 0) {
      currentSelectors[currentSelectors.length - 1] += ` ${key}`
    }

    if (typeof value === 'string') {
      result += `(${currentSelectors.join(' ')}): ${value};\n`
    } else if (typeof value === 'object' && value !== null) {
      result += toChildString(value, currentSelectors)
    }
  }

  return result
}
