# Imagen base oficial de Node.js
FROM node:18.18

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Compilar el código fuente con Babel
RUN npm run build

# Exponer el puerto 4000
EXPOSE 4000

# Iniciar la aplicación
CMD ["npm", "start"]
