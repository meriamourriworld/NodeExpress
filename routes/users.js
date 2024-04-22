const express = require("express");
const router = express.Router({mergeParams:true});
const mysql = require("mysql2");
const {selectUsers, addUser} = require("../models/crudOperations");



router.get("/", async(req,res)=>
{
    const data = await selectUsers();
    res.json(data);
});

router.post("/", (req, res)=>
{
    res.send("Add a User");
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