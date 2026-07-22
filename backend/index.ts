import cors from 'cors';
import express from 'express';
import { connect } from './src/db.js';
import { router } from './src/routes.js'
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(router)
app.listen(3000, () => {
    connect();
    console.log("Servidor rodando na porta 3000")
});

