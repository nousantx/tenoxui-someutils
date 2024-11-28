import { toChildString, fromChildString } from './dist/index.esm.js'

const myObj = fromChildString(`(body): this is my body; (.section): my section;
`)

console.log('object: ', myObj)
console.log('string: ', toChildString(myObj))
