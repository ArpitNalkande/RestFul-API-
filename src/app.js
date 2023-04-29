const express = require("express");
require("./db/conn");
const Student = require("./models/student");
const app = express();

const port = process.env.PORT || 8001;
app.use(express.json());

app.post("/student", (req, res) => {
  console.log(req.body);
  const User = new Student(req.body);
  User.save()
    .then(() => {
      res.status(201).send(User);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`connection is done ${port}`);
});
