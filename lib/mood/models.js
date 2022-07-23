const fs = require('fs')
const path = require('path');
const DBDir = path.join(__dirname,"../../db")

module.exports =class Model {
    constructor(tableName,Schemas){
        this.filepath=path.join(DBDir,tableName+'s.json')
        if (!fs.existsSync(this.filepath)) {
           fs.writeFileSync(this.filepath,'','utf-8')
       }   
       this.schemas = Schemas;
    }

    save(data){
        const olddata = fs.readFileSync(this.filepath,'utf-8')
        console.log('odlData', olddata ? 'ok' : 'non')
        const dat = olddata ? [...JSON.parse(olddata),data]:[data]
        console.log('data', dat);
        fs.writeFileSync(this.filepath,JSON.stringify(dat),'utf-8')
    }
}