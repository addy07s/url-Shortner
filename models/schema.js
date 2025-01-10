const mongoose=require("mongoose")
const urlSchema=new mongoose.Schema({
    shortid:{type:String,
        unique:true,
        required:true
},
redirectedUrl:{type:String,
    required:true
},
visitedHistory:[{type:Number}]
},{timestamps:true}
)

const urlModel=mongoose.model("Url",urlSchema);

module.exports=urlModel;