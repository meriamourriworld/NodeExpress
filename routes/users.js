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
/*
router.put("/:id", (req, res)=>
{
    res.send("Update a user");
});

router.delete("/:id", (req, res)=>
{
    res.send("Delete a User");
});
*/
module.exports = router;