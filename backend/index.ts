import express from 'express';
import { connect, prisma } from './src/db.js';

const app = express();
app.use(express.json())

app.listen(3000, () => {
    connect();
    console.log("Servidor rodando na porta 3000")
});

app.post("/login", async (req, resp) => {
    const { email, senha } = req.body;
    const user = await prisma.user.findFirst({
        where: { email: email, password: senha },

    });
    resp.json(user);
    resp.json({ senha, email });
})