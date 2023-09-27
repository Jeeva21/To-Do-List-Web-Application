import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const todayTodo = [];
const workTodo = [];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("index.ejs", {data : todayTodo, date : d.getDate() , month : month[d.getMonth()] });
})

app.post("/personaltodo", (req, res) =>{
    console.log("Personal Task Details",req.body);
    todayTodo.push(req.body.personalTodo);
    res.render("index.ejs", {data : todayTodo, date : d.getDate() , month : month[d.getMonth()] });
})

app.get("/work", (req, res) =>{
    res.render("work.ejs", {data: workTodo, date : d.getDate() , month : month[d.getMonth()]});
})

app.post("/worktodo", (req, res) =>{
    console.log("Work Task Details", req.body);
    workTodo.push(req.body.workTodo)
    res.render("work.ejs", {data: workTodo, date : d.getDate() , month : month[d.getMonth()]});
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})