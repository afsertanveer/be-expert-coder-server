const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get("/", (req, res) => {
  res.send("Be Expert Coder API Running");
});
app.get('/courses',(req,res)=>{
    console.log(courses);
    res.send(courses);
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const course = courses.find(course=>course.id===id);
    res.send(course);
})

app.listen(port, () => {
  console.log("Be Expert Coder running on port ", port);
});

