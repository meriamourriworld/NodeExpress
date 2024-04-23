const express = require("express");
const router = express.Router({mergeParams:true});
const session = require("express-session");
const flash = require("connect-flash");
const {selectUsers, addUser, updateUser, deleteUser} = require("../models/crudOperations");



// config
router.use(session({secret:"mySecret",resave: false,saveUninitialized: true}));
router.use(flash());
router.use((req,res,next)=>
{
    res.locals.messages = req.flash("message");
    next();
});



//Routing
router.get("/", async(req,res)=>
{
    const data = await selectUsers();
    res.render("users", {data});
});

router.get("/new",(req, res)=>
{
    res.render("newUser");
});

router.post("/", async(req, res)=>
{
    const {name, email, pass} = req.body;
    let message = await addUser(name, email, pass);
    req.flash("message", message);
    res.redirect("/users");
});

router.put("/:id", async(req, res)=>
{
    const {id} = req.params;
    const {name, email, pass} = req.body;
    const message = await updateUser(id, name, email, pass);
    req.flash("message", message);
    res.redirect("/users");
});

router.delete("/:id", async(req, res)=>
{
    const {id} = req.params;
    const message = await deleteUser(id);
    req.flash("message", message);
    res.redirect("/users");
});

module.exports = router;