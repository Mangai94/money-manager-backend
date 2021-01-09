const express = require("express");
const router = express.Router();

const token = "abcd";
router.get("/isAuthorized", async (req, res) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization && req.headers.authorization == token)
    return res.status(200).send(true);
  return res.status(400).send(false);
});

router.post("/", async (req, res) => {
  res.status(201).send(token);
});

router.post("/login", async (req, res) => {
  var data = req.body;
  if (!data) return res.status(500).send("Request data is empty");

  if (data.userName == "Mangai" && data.password == "kanna")
    return res.status(200).send(token);

  res.status(400).send("Invalid user");
});

module.exports = router;
