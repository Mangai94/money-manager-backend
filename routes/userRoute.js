const express = require("express");
const router = express.Router();

const users = [];

router.get("/details", async (req, res) => {
  if (!req.headers.authorization) return res.status(400).send();

  const user = users.find((u) => u.emailId === req.headers.authorization);

  if (!user) return res.status(400).send();

  return res.status(200).send({
    userName: user.userName,
    emailId: user.emailId,
  });
});

router.post("/", async (req, res) => {
  const user = req.body;
  if (!user || !user.userName || !user.emailId || !user.password)
    return res.status(400).send(false);

  users.push(user);
  res.status(201).send(user.emailId);
});

router.post("/login", async (req, res) => {
  var data = req.body;
  if (!data) return res.status(500).send("Request data is empty");

  const user = users.find(
    (u) => u.userName === data.userName && u.password === data.password
  );

  if (!user) return res.status(400).send("Invalid user");

  return res.status(200).send(user.emailId);
});

module.exports = router;
