const express = require("express");
const app = express();
const mysql = require("mysql2");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const usersRouter = require("./routes/users");
const path = require("path");
const PORT = 3000;


//Configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));


//Import Users Routes
app.use("/users", usersRouter);

app.get("/", (req, res)=>
{
    res.redirect("/users");
});


app.use("*", (req, res,err)=>
{
    const status = 404;
    const message = err.message;
    res.render("error", {status, message});
})

app.listen(3000, ()=>console.log(`Listening on port  ${PORT} ...`));

