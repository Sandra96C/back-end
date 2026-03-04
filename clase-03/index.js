import express from "express";
import pingRouter from "./routes/ping.router.js";
import productsRouter from "./routes/products.router.js";
import categoriesRouter from "./routes/categories.router.js";

const app = express();
app.use(express.json());
app.use(pingRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.listen(3000, () => console.log("Holaaa Mundo"));
