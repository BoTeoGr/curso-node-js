const os=require('node:os')
console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema:', os.platform())
console.log('Versión del sistema operativo: ',os.release())
console.log('Arquitectura: ', os.arch())
console.log('CPU: ', os.cpus())//<-- vamos a poder escalar procesos en Node
console.log('Memoria: ', os.totalmem() / 1024 / 1024)
console.log('Uptime: ', os.uptime() / 60 / 60)

