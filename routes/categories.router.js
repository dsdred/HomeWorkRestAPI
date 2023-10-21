// создаем объект маршрутов
// класс для создания маршрутов находится в модуле express

// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

// Mock данные https://www.mockaroo.com/
const categories = [
  {
    id: 1,
    name: "Bread Bowl Plain",
  },
  {
    id: 2,
    name: "Mustard - Seed",
  },
  {
    id: 3,
    name: "Salmon - Sockeye Raw",
  },
  {
    id: 4,
    name: "Coconut Milk - Unsweetened",
  },
  {
    id: 5,
    name: "Toamtoes 6x7 Select",
  },
  {
    id: 6,
    name: "Table Cloth 90x90 White",
  },
  {
    id: 7,
    name: "Wine - Lou Black Shiraz",
  },
  {
    id: 8,
    name: "Pasta - Fusili, Dry",
  },
  {
    id: 9,
    name: "Scallops - U - 10",
  },
  {
    id: 10,
    name: "Wine - Alsace Riesling Reserve",
  },
];

router.get("/", (req, res) => {
  res.json(categories);
});
router.get("/:id", (req, res) => {
  const categoryId = +req.params.id;
  const foundItem = categories.find((category) => category.id === categoryId);
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
