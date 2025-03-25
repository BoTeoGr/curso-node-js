const fs=require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8')
    .then(text=>console.log(`primer texto: ${text}`)) //promesa que se ejecuta cuando se termine de ejecutar otra función

console.log('Cosas mientras se leen los archivos...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt','utf-8')
    .then(text=>console.log(`segundo texto: ${text}`))

