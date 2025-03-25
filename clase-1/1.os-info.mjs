import { platform, release, arch, cpus, totalmem, uptime } from 'node:os'
// import os from 'node:os'
//Ctrl+. para mostrar las sugerencias 
console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema:', platform())
console.log('Versión del sistema operativo: ',release())
console.log('Arquitectura: ', arch())
console.log('CPU: ', cpus())//<-- vamos a poder escalar procesos en Node
console.log('Memoria: ', totalmem() / 1024 / 1024)
console.log('Uptime: ', uptime() / 60 / 60)

