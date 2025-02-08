import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {
        type: String,
        required: false
    },
    age:{
        type:Number,
        required: false
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required: false
    }

});

export const Student = mongoose.model('Student', studentSchema);