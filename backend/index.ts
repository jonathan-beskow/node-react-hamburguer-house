import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});

app.get("/", (req, resp) => {
    console.log("Deu certo");
})