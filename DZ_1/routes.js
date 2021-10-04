const express = require("express");
const router = express.Router();

const cAdmin = require("./controllers/adminController");
router.get("/api/admin", cAdmin.get);
router.post("/api/admin", cAdmin.post);
router.put("/api/admin", cAdmin.put);
router.delete("/api/admin", cAdmin.delete);

const cUser = require("./controllers/userController");
router.get("/api/user", cUser.get);
router.post("/api/user", cUser.post);
router.put("/api/user", cUser.put);
router.delete("/api/user", cUser.delete);

const cMedia = require("./controllers/mediaController")
router.post("/api/media", cMedia.post);

module.exports = router;