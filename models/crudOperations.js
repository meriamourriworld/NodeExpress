const {connect} = require("./connection");

selectUsers = async()=>
{
    const query = "SELECT name, email, pass FROM USERS";
    const data = await new Promise((resolve, reject)=>
    {
        connect.query(query, (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        });
    });
    return data;
}

addUser = async(name, email, pass)=>
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

updateUser = async (id, name, email, pass)=>
{
    const query = `UPDATE USERS SET name='${name}', email='${email}', pass= '${pass}'`
}

module.exports = {selectUsers, addUser, updateUser};