import { Router } from "express";
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

export default router;
