// создаем объект маршрутов
// класс для создания маршрутов находится в модуле express

// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

// Mock данные https://www.mockaroo.com/
const users = [
  {
    id: 1,
    firstName: "Shauna",
    lastName: "Diche",
    gender: "F",
    username: "sdiche0",
    year: 41,
  },
  {
    id: 2,
    firstName: "Ginni",
    lastName: "Drioli",
    gender: "F",
    username: "gdrioli1",
    year: 46,
  },
  {
    id: 3,
    firstName: "Neely",
    lastName: "Turnor",
    gender: "F",
    username: "nturnor2",
    year: 45,
  },
  {
    id: 4,
    firstName: "Annice",
    lastName: "Sedcole",
    gender: "F",
    username: "asedcole3",
    year: 46,
  },
  {
    id: 5,
    firstName: "Yehudi",
    lastName: "Vagg",
    gender: "M",
    username: "yvagg4",
    year: 37,
  },
  {
    id: 6,
    firstName: "Alana",
    lastName: "Cazalet",
    gender: "F",
    username: "acazalet5",
    year: 74,
  },
  {
    id: 7,
    firstName: "Miller",
    lastName: "Loudwell",
    gender: "M",
    username: "mloudwell6",
    year: 45,
  },
  {
    id: 8,
    firstName: "Sullivan",
    lastName: "Queen",
    gender: "M",
    username: "squeen7",
    year: 25,
  },
  {
    id: 9,
    firstName: "Dulci",
    lastName: "Bashford",
    gender: "F",
    username: "dbashford8",
    year: 20,
  },
  {
    id: 10,
    firstName: "Chlo",
    lastName: "Hebblewaite",
    gender: "F",
    username: "chebblewaite9",
    year: 37,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});
router.get("/:id", (req, res) => {
  const usertId = +req.params.id;
  const foundItem = users.find((user) => user.id === usertId);
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
