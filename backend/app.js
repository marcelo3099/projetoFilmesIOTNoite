import "dotenv/config";
import express from "express";
import sequelize from "./config/database.js";

const app = express();
app.use(express.json());

async function iniciarServidor() {
    try {
        await sequelize.authenticate();
        console.log("Banco de dados conectado!");
        await sequelize.sync({ alter: true });
        console.log("Tabelas sincronizadas!");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Erro ao iniciar a aplicação:");
        console.error(error);
    }
}

iniciarServidor();

export default app;