import express from "express";
import { ProductRoutes } from "./ProductRoutes";

export const RegisteredRoutes = express.Router();

RegisteredRoutes.use("/product", ProductRoutes);
