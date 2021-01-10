const express = require("express");
const router = express.Router();

const transactions = [];

router.get("/", async (req, res) => {
  const userEmail = req.headers.authorization;
  const userTransactions = transactions.filter((t) => t.user === userEmail);
  const result = [];

  userTransactions.forEach((t) => {
    const index = result.findIndex((d) => d.date === t.date);

    if (index < 0) {
      result.push({
        date: t.date,
        totalIncome: t.type === "Income" ? t.amount : 0,
        totalExpense: t.type === "Expense" ? t.amount : 0,
        transactions: [t],
      });
      return;
    }

    if (t.type === "Income") result[index].totalIncome += t.amount;
    else result[index].totalExpense += t.amount;
    result[index].transactions.push(t);
  });

  return res.status(200).send(result);
});

router.post("/", async (req, res) => {
  const data = req.body;
  data.user = req.headers.authorization;
  data.id = transactions.length + 1;

  transactions.push(data);
  return res.status(201).send(data);
});

module.exports = router;
