//Esto solo en los módulos nativos que no tienen promesas nativas
//const {promisify} = require('node:util')
//const readFilePromise=promisify(fs.readFile)


const fs=require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8',(err,text)=>{//<-- ejecuta el callback cuando se termine de leer el fichero
    console.log(`primer texto: ${text}`)
})

//callback: una función que se ejecuta cuando se termine de ejecutar otra función

console.log('Cosas mientras se leen los archivos...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt','utf-8',(err,text)=>{
    console.log(`segundo texto: ${text}`)
})
