import { toChildString } from './dist/index.esm.js'

// Example usage
const styles = {
  body: 'bg-red',
  '.my-class': 'bg-red',
  '#about': 'bg-yellow',
  '#home': 'w-mx-200px',
  '#home': {
    '.title': 'text-blue',
    '.section': {
      '': 'bg-blue',
      'div.box': 'style'
    }
  }
}

console.log(toChildString(styles))
