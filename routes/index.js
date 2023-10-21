// импортируем класс Router
const { Router } = require("express");
// создаем объект для работы с группой маршрутов
const router = new Router();

const productsRouter = require("./products.router");
const usersRouter = require("./users.router");
const categoriesRouter = require("./categories.router");
const cartRouter = require("./cart.router");
const currenciesRouter = require("./currencies.router");

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/cart", cartRouter);
router.use("/currencies", currenciesRouter);

module.exports = router;
