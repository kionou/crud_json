const { Schemas, model } = require("../lib/mood/index.js");

const taskSchema =  new Schemas ({
        name:"string",
        description:"string",
        status:"string",
        user_id:"string" 
})

module.exports = model("task",taskSchema)