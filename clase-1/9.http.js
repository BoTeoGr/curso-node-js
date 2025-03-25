const http=require('node:http')//<- protocolo http
const picocolors=require('picocolors')
const {findAvailablePort}=require('./10.free-port.js')

const desiredPort=process.env.PORT ?? 5500

const server=http.createServer((req,res)=>{
    console.log('Petición recibida')
    res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then(port=>{
    server.listen(port,()=>{
        console.log("Servidor escuchando en", picocolors.green(`http://localhost:${port}`))
    })
})