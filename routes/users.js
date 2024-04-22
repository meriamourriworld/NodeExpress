const express = require("express");
const router = express.Router({mergeParams:true});
const mysql = require("mysql2");
const {selectUsers, addUser, updateUser, deleteUser} = require("../models/crudOperations");



router.get("/", async(req,res)=>
{
    const data = await selectUsers();
    res.json(data);
});

router.post("/", async(req, res)=>
{
    const {name, email, pass} = req.body;
    let message = await addUser(name, email, pass);
    res.send("Add a User " + message);
    
});

router.put("/:id", async(req, res)=>
{
    const {id} = req.params;
    const {name, email, pass} = req.body;
    const message = await updateUser(id, name, email, pass);

    res.send("Update a user " + message);
});

router.delete("/:id", async(req, res)=>
{
    const {id} = req.params;
    const message = await deleteUser(id);
    res.send("Delete a User " + message);
});

module.exports = router;