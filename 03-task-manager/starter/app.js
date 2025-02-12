const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
app.use(express.static("public"));
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
//middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Listening to port 5001");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
