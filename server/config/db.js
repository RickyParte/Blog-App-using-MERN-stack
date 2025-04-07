const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://sanketwalhekar83:9665998329@cluster0.sevwc.mongodb.net/blog").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})
