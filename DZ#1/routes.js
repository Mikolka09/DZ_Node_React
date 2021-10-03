const express = require("express");
const router = express.Router();

const cAdmin = require("./controllers/adminController");
router.get("/api/admin", cAdmin.get);
router.post("/api/admin", cAdmin.post);
router.put("/api/admin", cAdmin.put);
router.delete("/api/admin", cAdmin.delete);

module.exports = router;