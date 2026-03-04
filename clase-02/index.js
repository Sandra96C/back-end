import express from "express";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
  },
  {
    id: 2,
    name: "Mouse",
    price: 20,
  },
];

const categories = [
  {
    id: 1,
    name: "Electro",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    name: "Bazar",
    description: "Lorem ipsum bazar",
  },
];

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const product = products.find((p) => p.id == id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const category = categories.find((cat) => cat.id == id);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json(category);
});

app.post("/categories", (req, res) => {
  const newCategory = {
    id: Date.now(),
    name: req.body.name,
    description: req.body.description,
  };

  categories.push(newCategory);
  res.status(201).json(newCategory);
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(3000, () => console.log("Holaaa Mundo"));
