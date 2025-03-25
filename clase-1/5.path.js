const path=require('node:path')

console.log(path.sep) //<- Indica el separador de rutas (\ en Windows, / en Linux)

//unir rutas con path.join  
const filePath=path.join('content', 'subfolder', 'file.txt')
console.log(filePath)

//obtener el nombre del fichero
const base=path.basename('/tmp/folder/password.txt')
console.log(base)

const filename=path.basename('/tmp/folder/password.txt', '.txt')
console.log(filename)

//obtener la extensión
const extension=path.extname('image.png')
console.log(extension)