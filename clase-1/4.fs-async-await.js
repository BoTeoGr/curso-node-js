const { readFile } = require('node:fs/promises');

//IIFE -> Inmediatly Invoked Function Expression (función autoinvocada)

(async () => {
	console.log("Leyendo el primer archivo...");
	const text1 = await readFile("./archivo.txt", "utf-8");
	console.log(`primer texto: ${text1}`);

	console.log("Leyendo el segundo archivo...");
	const text2 = await readFile("./archivo2.txt", "utf-8");
	console.log(`segundo texto: ${text2}`);
})();

console.log("Cosas mientras se leen los archivos...")