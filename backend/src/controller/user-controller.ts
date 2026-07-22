import bcrypt from "bcrypt";
import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../db.js";

export const login = async (req: Request, resp: Response) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      resp.status(400);
      return;
    }

    const usuario = await prisma.user.findFirst({
      where: { email },
    });

    if (!usuario) {
      resp.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    const match = await bcrypt.compare(senha, usuario?.password);

    if (!match) {
      resp
        .status(401)
        .json({ message: "Usuário não encontrado ou senha inválida" });
      return;
    }

    const userInfos = {
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
      cep: usuario.cep,
    };

    if (!process.env.JWT_SECRET) {
      return;
    }

    const token = jwt.sign(userInfos, process.env.JWT_SECRET);

    resp.cookie("user", token, {
      maxAge: 900000,
    });
    resp.status(200).json(userInfos);
  } catch (error) {
    resp.status(500).json({ message: "Erro no servidor" });
  }
};

export const register = async (req: Request, resp: Response) => {
  try {
    const { name, email, password, cep } = req.body;

    if (!name || !email || !password || !cep) {
      resp
        .status(400)
        .json({ message: "Todas as informações são obrigatórias" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (user?.email) {
      resp.status(409).json({ message: "E-mail já cadastrado" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword, cep },
    });
    resp.status(201).json(newUser);
  } catch (error) {
    resp.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const auth = async (
  req: Request,
  resp: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.user;
    if (!process.env.JWT_SECRET) {
      return;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    resp.status(200).json(decoded);
    next();
  } catch (error) {
    resp.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const logout = async (req: Request, resp: Response) => {
  const { user } = req.cookies;

  if (user) {
    resp.clearCookie("user");
    resp.json({ message: "Usuário deslogado" });
  }
};
