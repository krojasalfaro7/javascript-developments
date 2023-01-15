# node-developments

## Crear un proyecto en node
	
	mkdir proyecto
	cd proyecto
	npm init
	mkdir src
	touch tsconfig.json

### Agregar la siguiente linea en scripts dentro package.json
	
	"scripts": {
		"build": "tsc"
	}

### Convertir los archivos .ts a .js
	npm run build


## Instalar typescript en el proyecto

	npm install -s typescript

## Correr el proyecto

	npm start


## Para la parte de encriptacion y de express
	npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose
