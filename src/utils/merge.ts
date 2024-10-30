export function merge<T extends object>(...objects: T[]): T {
  return objects.reduce((result, obj) => {
    Object.keys(obj).forEach((key) => {
      const typedKey = key as keyof T
      if (
        typeof obj[typedKey] === 'object' &&
        obj[typedKey] !== null &&
        !Array.isArray(obj[typedKey])
      ) {
        result[typedKey] = merge(
          (result[typedKey] as object) || {},
          obj[typedKey] as object
        ) as T[keyof T]
      } else {
        result[typedKey] = obj[typedKey]
      }
    })
    return result
  }, {} as T)
}
