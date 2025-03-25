//Esto solo en los módulos nativos que no tienen promesas nativas
//const {promisify} = require('node:util')
//const readFilePromise=promisify(fs.readFile)


const fs=require('node:fs')

const text=fs.readFileSync('./archivo.txt','utf-8')
console.log(`primer texto: ${text}`)

console.log('Cosas mientras se leen los archivos...')

const text2=fs.readFileSync('./archivo2.txt','utf-8')
console.log(`segundo texto: ${text2}`)
