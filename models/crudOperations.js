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

module.exports = {selectUsers};