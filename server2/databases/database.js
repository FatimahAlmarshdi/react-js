const Sequelize= require('sequelize')
const db = {};
const sequelize = new Sequelize("countries","root","root123",{
    host:'127.0.0.1',
    Port:'3306',
    dialect:'mysql',
    define:{
        timestamps:false,
        freezeTableName: true
    },
    opreratorsAliases:false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
});

db.sequelize=sequelize
db.Sequelize=Sequelize

db.Location=require("./models/Location")(sequelize,Sequelize);
module.exports=db