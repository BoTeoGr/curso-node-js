const http = require("node:http");

//commonJs -> modulos clasicos de node.js
const json = require("./pokemon/ditto.json"); //<- importando el archivo json

const processRequest = (req, res) => {
	const { method, url } = req; //<- destructuración de req
	switch (method) {
		case "GET":
			switch (url) {
				case "/pokemon/ditto":
					res.setHeader("Content-Type", "aplication/json; charset=utf-8");
					return res.end(JSON.stringify(json));
				default:
					res.statusCode = 404; //<- estado 404: no encontrado
					res.setHeader("Content-Type", "text/plain; charset=utf-8"); //<- tipo de contenido (texto plano)
					return res.end("Página no encontrada"); //<- envía la respuesta al cliente
			}
		case "POST":
			switch (url) {
				case "/pokemon/ditto": {
					let body = "";
                    //escucando el evento de data
                    req.on("data", (chunk) => {
                        body += chunk.toString(); //<- concatenando los datos
                    });

					req.on("end", () => {
						try {
							const parsedBody = JSON.parse(body); //<- parsing the JSON
							res.statusCode = 201; //<- estado 201: creado
							res.setHeader("Content-Type", "application/json; charset=utf-8"); //<- tipo de contenido JSON
							data.timestamp = new Date(); //<- agregando la fecha al objeto
							res.end(JSON.stringify(parsedBody)); //<- envía la respuesta al cliente
						} catch (error) {
							res.statusCode = 400; //<- estado 400: solicitud incorrecta
							res.setHeader("Content-Type", "text/plain; charset=utf-8"); //<- tipo de contenido texto
							res.end("JSON inválido"); //<- envía el error al cliente
						}
					});
					break;
				}
				default:
					res.statusCode = 404; //<- estado 404: no encontrado
					return res.end("Página no encontrada"); //<- envía la respuesta al cliente
			}
	}
};

const server = http.createServer(processRequest);

server.listen(5500, () => {
	console.log("Servidor escuchando en http://localhost:5500");
});
