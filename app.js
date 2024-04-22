const express = require("express");
const app = express();
const usersRouter = require("./routes/users");

const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Import Users Routes
app.use("/users", usersRouter);



app.listen(3000, ()=>console.log(`Listening on port  ${PORT} ...`));

