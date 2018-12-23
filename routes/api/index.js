const router = require("express").Router();

const customerRoutes = require("./customers");

// Customer route
router.use("/customers", customerRoutes);

module.exports = router;