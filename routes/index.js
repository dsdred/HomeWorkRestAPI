// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

const productsRouters = require("./products.router");
const usersRouters = require("./users.router");
const categoriesRouters = require("./categories.router");
const cartRouters = require("./cart.router");
const currenciesRouters = require("./currencies.router");

router.use("/products", productsRouters);
router.use("/users", usersRouters);
router.use("/categories", categoriesRouters);
router.use("/cart", cartRouters);
router.use("/currencies", currenciesRouters);

module.exports = router;
