import mongoose from "mongoose";

const Schema= mongoose.Schema;

const customerSchema= new Schema({

    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

}, {timestamps: true});

const Customer = mongoose.model('customer', customerSchema)

export default Customer;