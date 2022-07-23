const { Schemas, model } = require("../lib/mood/index.js");
const usersSchema =  new Schemas ({
        name:"string",
        lastname:"string",
        email:"string",
        password:"string" 
})


module.exports= model("user",usersSchema)