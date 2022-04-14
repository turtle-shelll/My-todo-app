const mongoose = require('mongoose');



const tasks = new mongoose.Schema({


     name:{
         type:String,
         required:[true,"add yuor tassk first then try again"],
         trim:true,
         maxlength:[20,"name can not be more then 20 charector"],
     },
     completed:{
         type:Boolean,
         default:false,
     },


   /* name : {
        type: String,
        require: true,
    },
    complated : {
        type: Boolean,
        default:false,
    },*/
});



module.exports=mongoose.model('task',tasks);