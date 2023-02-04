const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')

const PORT  = process.env.PORT  || 7000;
const app = express();
app.use(cors());    


app.use(express.json());
app.use(authRouter);

const DB = "mongodb+srv://Admin:proWFVB0eF9EGO1O@cluster0.ukjlf0a.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() =>
    console.log('CONNECTED TO DB')
)




app.listen(PORT , "0.0.0.0" , ()=>{
    console.log(`CONNECTED IN ${PORT}`);
    
});

