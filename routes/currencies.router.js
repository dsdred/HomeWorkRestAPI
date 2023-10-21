// создаем объект маршрутов
// класс для создания маршрутов находится в модуле express

// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

// Mock данные https://www.mockaroo.com/
const currencies = [
  {
    id: 1,
    code: "CZK",
    name: "Koruna",
  },
  {
    id: 2,
    code: "IDR",
    name: "Rupiah",
  },
  {
    id: 3,
    code: "BRL",
    name: "Real",
  },
  {
    id: 4,
    code: "RUB",
    name: "Ruble",
  },
  {
    id: 5,
    code: "CNY",
    name: "Yuan Renminbi",
  },
  {
    id: 6,
    code: "SEK",
    name: "Krona",
  },
  {
    id: 7,
    code: "PHP",
    name: "Peso",
  },
  {
    id: 8,
    code: "EUR",
    name: "Euro",
  },
  {
    id: 9,
    code: "USD",
    name: "Dollar",
  },
];

router.get("/", (req, res) => {
  res.json(currencies);
});
router.get("/:code", (req, res) => {
  const currencyCode = req.params.code;
  const foundItem = currencies.find(
    (currency) => currency.code === currencyCode
  );
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
