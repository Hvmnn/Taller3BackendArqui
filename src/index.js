import app from "./app";

const main = () => {
  app.listen(app.get("port"));
  console.log("Server on port 4000 - New Version", app.get("port"));
};

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

testConnection();
main();
