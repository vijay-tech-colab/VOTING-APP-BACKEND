const express = require('express');
const app  = express();
require('dotenv').config({path : "./config/config.env"});
const userRouter = require('./routes/userRouter');
const candidateRouter = require('./routes/candidateRouter');
const bodyParser = require('body-parser');
const dbConnection = require('./db/dbConnection');
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.send("<h1>Welcome the Voting App .</h1>")
});
// !user the routes
app.use('/user',userRouter);
app.use('/candidate',candidateRouter);
const PORT_URL = process.env.PORT || 3000
app.listen(PORT_URL,() => {
    console.log('server running on 5000 port ...');
    dbConnection();
})