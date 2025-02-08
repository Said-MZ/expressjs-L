const express = require("express");
const path = require("path");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/query", (req, res) => {
  const { name, age } = req.query;
  if (!name && !age) return res.send("provide a query");
  res.json({ name, age });
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => {
    return product.id === Number(id);
  });
  if (!product) res.status(404).send("Not found");
  console.log(product);
  res.json(product);
});

app.listen(5001, () => {
  console.log("Listening to port 5001");
});
