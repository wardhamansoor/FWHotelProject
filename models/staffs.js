import mongoose from "mongoose";

const Schema= mongoose.Schema;

const staffSchema= new Schema({

    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
    

}, {timestamps: true});

const Staff = mongoose.model('staff', staffSchema)

export default Staff;