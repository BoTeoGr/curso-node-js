const fs=require('node:fs/promises')
const path=require('node:path')
const picocolors=require('picocolors')


// ./ -> directorio actual
// ../ -> directorio padre

const folder=process.argv[2] ?? './' //<-- ./ por defeco, [2] es el segundo argumento, [1] es el nombre del script(8.ls-advanced.js), [0] es node


async function ls(folder){
    let files = [];
    try{
        files=await fs.readdir(folder)
    } catch{
        console.log(picocolors.red(`Error al leer el directorio: ${folder}`))
        process.exit(1) //<-- termina el programa (ver el icono en la salida)
    }

    const filePromises=files.map(async file=>{
        //.map: crea un array de promesas (una por cada fichero)
        const filePath=path.join(folder, file)
        let stats
        try{
            stats=await fs.stat(filePath) //<- estatus - información del fichero
            //espero la información del fichero
        } catch{
            console.log(picocolors.red(`Error al leer el fichero: ${filePath}`))
            process.exit(1)
        }

        const isDirectory=stats.isDirectory()
        const fileType=isDirectory ? 'd' : 'f' //<-- si es un directorio, 'd', si no, 'f'
        const fileSize=stats.size
        const fileModified=stats.mtime.toLocaleString()
        return `${fileType} ${picocolors.italic(picocolors.blue(file.padEnd(20)))} ${picocolors.green(fileSize.toString().padStart(10)+" Bytes")} ${picocolors.magenta(fileModified)}`//<-- padStart: padding al inicio, padEnd: padding al final
    })

    const filesInfo=await Promise.all(filePromises)//<- espero a que todas las promesas se resuelvan para generar un array de strings
    filesInfo.forEach(fileInfo=>console.log(fileInfo))


}

ls(folder)