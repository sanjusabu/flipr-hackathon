const express = require("express");
// const { check } = require('express-validator');
const router = express.Router();

const companies = require("../controllers/companies");

router.post("/search", companies.search);
router.post("/index", companies.marketindex);
router.post("/datesort", companies.datesort);
router.post("/graphsort", companies.graphsort);
router.post("/returns", companies.returns);
router.post("/best", companies.best);
router.post("/graphbse", companies.graphbse);

module.exports = router;
