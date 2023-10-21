// создаем объект маршрутов
// класс для создания маршрутов находится в модуле express

// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

// Mock данные https://www.mockaroo.com/
const products = [
  {
    id: 1,
    name: "Jameson Irish Whiskey",
    categoryId: 7,
  },
  {
    id: 2,
    name: "Wine - Cotes Du Rhone Parallele",
    categoryId: 6,
  },
  {
    id: 3,
    name: "Cake - Sheet Strawberry",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Sausage - Blood Pudding",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Cactus Pads",
    categoryId: 5,
  },
  {
    id: 6,
    name: "Langers - Cranberry Cocktail",
    categoryId: 5,
  },
  {
    id: 7,
    name: "Beef - Bones, Cut - Up",
    categoryId: 2,
  },
  {
    id: 8,
    name: "Tomato - Peeled Italian Canned",
    categoryId: 3,
  },
  {
    id: 9,
    name: "Tequila - Sauza Silver",
    categoryId: 8,
  },
  {
    id: 10,
    name: "Water - Tonic",
    categoryId: 4,
  },
];

router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:id", (req, res) => {
  const productId = +req.params.id;
  const foundItem = products.find((product) => product.id === productId);
  res.json(foundItem);
});
router.post("/", (req, res) => {
  res.end("ok");
});
router.put("/:id", (req, res) => {
  res.end("ok");
});
router.delete("/:id", (req, res) => {
  res.end("ok");
});

module.exports = router;
