const express = require("express");
const cors = require("cors");
const expenseRouter = require("./routes/expenseRoute");
const userRouter = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/transactions", expenseRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("App is running")
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ...`);
});
