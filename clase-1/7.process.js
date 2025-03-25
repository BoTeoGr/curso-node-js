//argumentos de entrada
//console.log(process.argv)

//controlar el proceso y su salida
// process.exit(0)//<-- 0: todo bien, 1: todo mal

//controlar eventos del proceso
// process.on('exit', ()=>{
//     //limpiar recursos
// })

//current working directory
console.log(process.cwd()) //<- desde donde se ejecuta el script

//env variables
console.log(process.env.VAR1)

//para asignar un valor desde la terminal:

//en la ejecución: VAR1=valor node 7.process.js
//en windows cmd: set VAR1=valor; node 7.process.js
//en windows PowerShell: $env:VAR1=valor; node 7.process.js
//en linux/mac: VAR1=valor node 7.process.js
