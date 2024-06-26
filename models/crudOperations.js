const {connect} = require("./connection");

const selectUsers = async()=>
{
    const query = "SELECT id,name, email, pass FROM USERS";
    const data = await new Promise((resolve, reject)=>
    {
        connect.query(query, (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        });
    });
    return data;
}

const addUser = async(name, email, pass)=>
{
    let message;
    const query = `INSERT INTO users(name, email, pass) VALUES('${name}','${email}','${pass}')`;
    message = await new Promise((resolve, reject)=>
    {
        connect.query(query,(err)=>
        {
            if(err) reject(err);
            else resolve("User successfully inserted!");
        });
    });
    return message;
}

const updateUser = async (id, name, email, pass)=>
{
    const query = `UPDATE USERS SET name='${name}', email='${email}', pass= '${pass}' WHERE id=${id}`;
    const message = await new Promise((resolve, reject)=>
    {
        connect.query(query, (err)=>
        {
            if(err) reject(`Failed updating a user with id : ${id} => ${err}`);
            else resolve(`Update user ${id} successfully applied`);
        });
    });
    return message;
}

const deleteUser = async (id)=>
{
    const query = `DELETE FROM users WHERE id=${id}`;
    const message = await new Promise((resolve, reject)=>
    {
        connect.query(query, (err)=>
        {
            if (err) reject(`Deleting a user ${id} failed => ${err}`);
            else resolve(`Deleted successfully user : ${id}`);
        });
    });
    return message;
}

module.exports = {selectUsers, addUser, updateUser, deleteUser};