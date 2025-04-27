const express = require('express');
const app= express()

const PORT=process.env.PORT ?? 5500

app.use(express.json()) //<- middleware para parsear el JSON

/* //middleware: para manejar el cuerpo de la solicitud
app.use((req, res, next) => {
    if (req.method !== 'POST') return next() //<- si no es un POST, sigue con el siguiente middleware
    if (req.headers['content-type'] !== 'application/json') return next() //<- si no es JSON, sigue con el siguiente middleware

    //solo llegan request que son POST y que tienen el header content-type application/json
    let body = ''
    req.on('data', (chunk) => {
        body += chunk.toString() //<- concatenando los datos
    })
    req.on('end', () => {
        const parsedBody = JSON.parse(body) //<- parsing the JSON
        //mutar la request para que tenga el body parseado
        req.body = parsedBody //<- mutando la request
        next() //<- sigue con el siguiente middleware
    })
}) */

app.get('/', (req, res) => {
    res.status(200).send('Página de inicio')
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body) //<- envía la respuesta al cliente
})

app.use((req, res) => {//<-- para manejar rutas no encontradas
    res.status(404).send('Página no encontrada') //<- envía la respuesta al cliente
})
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})