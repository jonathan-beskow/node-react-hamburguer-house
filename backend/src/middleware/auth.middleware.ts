import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user } = req.cookies;
    if (!process.env.JWT_SECRET) {
      res.status(500).json({ message: "Erro no servidor" });
      return;
    }
    const decoded = jwt.verify(user, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ message: "Usuário não autenticado" });
      return;
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Erro inesperado no middleware");
    return;
  }
};
