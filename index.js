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

app.post("/", (req, res) =>{
    console.log(req.body);
    const personalTODO = req.body.personalTodo;
    todayTodo.push(personalTODO);
    res.render("index.ejs", {data : todayTodo, date : d.getDate() , month : month[d.getMonth()] });
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})