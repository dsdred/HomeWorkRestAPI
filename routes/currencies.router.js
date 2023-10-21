// создаем объект маршрутов
// класс для создания маршрутов находится в модуле express

// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

// Mock данные https://www.mockaroo.com/
const currencies = [
  {
    id: "CZK",
    name: "Koruna",
  },
  {
    id: "IDR",
    name: "Rupiah",
  },
  {
    id: "BRL",
    name: "Real",
  },
  {
    id: "RUB",
    name: "Ruble",
  },
  {
    id: "CNY",
    name: "Yuan Renminbi",
  },
  {
    id: "SEK",
    name: "Krona",
  },
  {
    id: "PHP",
    name: "Peso",
  },
  {
    id: "EUR",
    name: "Euro",
  },
  {
    id: "USD",
    name: "Dollar",
  },
];

router.get("/", (req, res) => {
  res.json(currencies);
});
router.get("/:id", (req, res) => {
  const currencyId = req.params.id;
  const foundItem = currencies.find((currency) => currency.id === currencyId);
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
