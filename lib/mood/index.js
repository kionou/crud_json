const Model = require('./models.js');
const Schemas = require('./schema.js');


module.exports = class Mood { 

    constructor(){

    }
  
    static Schemas = Schemas;
    static model(tableName,Schemas){
        return new Model(tableName,Schemas)
    }

}
