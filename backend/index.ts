import cors from 'cors';
import express from 'express';
import { connect } from './src/db.js';
import { router } from './src/routes.js'


const app = express();

app.use(express.json());
app.use(cors());
app.use(router)
app.listen(3000, () => {
    connect();
    console.log("Servidor rodando na porta 3000")
});

