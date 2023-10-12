const mongoose = require("mongoose");
require("dotenv").config();

// console.log(process.env.MONGODB_URL);
console.log("surajzzzz");


exports.connect= () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully suraj" ))
    .catch( (error) => {
        console.log("DB Connection Failed suraj");
        console.error(error);
        process.exit(1);
        
    } )
};

