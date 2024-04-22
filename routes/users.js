const express = require("express");
const router = express.Router({mergeParams:true});
const mysql = require("mysql2");
const {selectUsers, addUser, updateUser} = require("../models/crudOperations");



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
/*
router.delete("/:id", (req, res)=>
{
    res.send("Delete a User");
});
*/
module.exports = router;