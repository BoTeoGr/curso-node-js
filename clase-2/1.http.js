const http=require('node:http')//<- protocolo http
const fs=require('node:fs')//<- sistema de archivos

const desiredPort=process.env.PORT ?? 5500

const processRequest=(req,res)=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8') //<- tipo de contenido (texto plano)
    if(req.url==='/'){
        res.statusCode=200 //<- estado 200: todo bien
        res.end('Página de inicio')
    }else if(req.url==='/contacto'){
        res.statusCode=200 //<- estado 200: todo bien
        res.end('Página de contacto')
    }else if(req.url==='/imagen'){
        fs.readFile('./Node.js_logo.svg', (err, data)=>{
            if(err){
                res.statusCode=500 //<- estado 500: error interno del servidor
                res.end('Error al cargar la imagen')
            }else{
                res.statusCode=200 //<- estado 200: todo bien
                res.setHeader('Content-Type', 'image/svg+xml') //<- tipo de contenido (imagen svg+xml)
                res.end(data) //<- envía la imagen al cliente
            }
        })
    }
    else{
        res.statusCode=404 //<- estado 404: no encontrado
        res.end('Página no encontrada')
    }
}

const server=http.createServer(processRequest)

server.listen(desiredPort, ()=>{
    console.log(`Servidor escuchando en http://localhost:${desiredPort}`)
})