const express = require("express");
const cors = require("cors");
const expenseRouter = require("./routes/expenseRoute");
const userRouter = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", expenseRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} ...`);
});
