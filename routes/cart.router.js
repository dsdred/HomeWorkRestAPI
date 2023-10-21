// создаем объект маршрутов
// класс для создания маршрутов находится в модуле express

// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

// Mock данные https://www.mockaroo.com/
const cart = [];

router.get("/", (req, res) => {
  res.json(cart);
});

router.post("/", (req, res) => {
  res.end("ok");
});

router.delete("/:id", (req, res) => {
  res.end("ok");
});

module.exports = router;
