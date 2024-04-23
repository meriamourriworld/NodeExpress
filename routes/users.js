const express = require("express");
const router = express.Router({mergeParams:true});
const {selectUsers, addUser, updateUser, deleteUser} = require("../models/crudOperations");


//Routing
router.get("/", async(req,res)=>
{
    const data = await selectUsers();
    console.log(data)
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
    console.log(message)
    res.redirect("/users");
});

router.put("/:id", async(req, res)=>
{
    const {id} = req.params;
    const {name, email, pass} = req.body;
    const message = await updateUser(id, name, email, pass);

    res.send(message);
});

router.delete("/:id", async(req, res)=>
{
    const {id} = req.params;
    const message = await deleteUser(id);
    res.send(message);
});

module.exports = router;