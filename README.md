# Backend Project - Local Setup

Este documento explica los pasos necesarios para configurar y ejecutar el proyecto backend de forma local.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu dispositivo:

- [Node.js 18.18.0](https://nodejs.org/es)
- [MySQL Workbench 8.1.0](https://dev.mysql.com/downloads/mysql/)
- [Sequelize CLI](https://sequelize.org/master/manual/migrations.html)

---

## Instalación de Dependencias

Ejecuta los siguientes comandos en la terminal (Bash):

```bash
npm install -g sequelize-cli
npm install
```

---

## Configuración de la Base de Datos

1. Crea el archivo `.env` en la carpeta raiz del proyecto "TALLER3BACKENDARQUI".
2. Edita el archivo `.env` y completa las variables de entorno con tu configuración local:

```bash
DB_HOST=localhost
DB_DATABASE=nombre_base_de_datos  # Nombre de tu base de datos en MySQL Workbench
DB_USER=root
DB_PASSWORD=tu_contraseña         # Contraseña de MySQL Workbench
TOKEN_SECRET=mysecretkey          # Clave secreta para los tokens
```

---

## Migraciones y Seeders

Ejecuta los siguientes comandos para crear la base de datos, aplicar las migraciones y cargar los seeders:

```bash
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

---

## Ejecución del Proyecto

Para iniciar el servidor en modo desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

El servidor se ejecutará en [http://localhost:4000](http://localhost:4000) por defecto.

---

## Notas Adicionales

- Si tienes problemas de conexión con la base de datos, revisa las credenciales en el archivo `.env`.
- Asegúrate de que el puerto `4000` esté libre en tu máquina local antes de iniciar el servidor.

---

¡Listo! Ahora puedes trabajar con el backend de manera local. 🚀

