// .js -> por defecto utiliza CommonJS
// .msj -> para utilizar ES modules
// .cjs -> para utilizar CommonJS

//ECMAScript modules (ESM) 
import {sum, sub, mul, div} from './sum.mjs'
console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))
console.log(div(1, 2))
