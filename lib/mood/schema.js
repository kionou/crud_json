module.exports = class Schemas {
    constructor(obj){
     this.prosperties=Object.keys(obj);
     this.types = obj;

        // name:"string",
        // lastname:"string",
        // email:"string",
        // password:"string"    
    };
    getprosperties(){return this.prosperties}
    getprosperty(prosp){return this.types[prosp]}

 }