module.exports = app => {
    const ikan = require("../controllers/ikan.controller")
    const router = require("express").Router();

    router.get("/", ikan.findAll);
    router.get("/:id", ikan.show);
    router.post("/", ikan.create);
    router.put("/:id", ikan.update);
    router.delete("/:id", ikan.delete);

    app.use('/ikan', router);
}