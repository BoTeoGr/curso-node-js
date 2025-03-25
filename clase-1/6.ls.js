const fs=require('node:fs')


// ./ -> directorio actual
// ../ -> directorio padre
fs.readdir('./', (err,files)=>{
    if(err){
        console.log('Error al leer el directorio', err)
        return
    }
    files.forEach(file=>console.log(file))
})