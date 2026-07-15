import cors from 'cors';
import express, { type Request, type Response } from 'express';
import { connect, prisma } from './src/db.js';
import { json } from 'node:stream/consumers';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    connect();
    console.log("Servidor rodando na porta 3000")
});

app.post("/login", async (req: Request, resp: Response) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            resp.status(400);
            return;
        }
        const user = await prisma.user.findFirst({
            where: { email: email, password: senha },

        });

        if (!user) {
            resp.status(404).json({ message: "Usuário não encontrado" });
            return;
        }
        resp.status(200).json(user);
        resp.json({ senha, email });
    } catch (error) {
        resp.status(500).json({ message: "Erro no servidor" })
    }
})

app.post("/register", async (req: Request, resp: Response) => {
    try {
        const { name, email, password, cep } = req.body;

        if (!name || !email || !password || !cep) {
            resp.status(400).json({ message: "Todas as informações são obrigatórias" })
            return;
        }

        const user = await prisma.user.findFirst({
            where: { email: email }
        })

        if (user?.email) {
            resp.status(409).json({ message: "E-mail já cadastrado" })
            return;
        }

        const newUser = await prisma.user.create({
            data: { name, email, password, cep }
        })
        resp.status(201).json(newUser);

    } catch (error) {
        resp.status(500).json({ message: "Erro no servidor" })
        return;
    }
})