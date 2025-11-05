import { findProducts } from "./findProducts.js";
import { menu } from "./menu.js";

const productsJson = await findProducts();
const cart = [];

if (productsJson.length !== 0) {
  await menu("0", cart, productsJson);
}