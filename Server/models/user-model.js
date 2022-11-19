const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        userName: { type: String, required: true ,unique:true },
        rating: { type: Number, required: false },
        phoneNumber : {type:Number,required:false},
        dateOfBirth : {type : String,required:true},
        password : {type : String,required: true},
        token :{type:String,required:false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Users', User)