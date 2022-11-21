import { Router } from "express";
import Customer from "../models/customers.js";

const customerRoute = Router();


// this '/' is '/customer' in index.js, right? so it'll proceed from there
customerRoute.route('/').all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    next()
}).get(async (req, res) => {
    const allCustomers= await Customer.find({});
    res.json(allCustomers)
}).post(async (req, res) => {
    const createdCustomer= await Customer.create(req.body);
    res.json(createdCustomer)
}).put(async (req, res) => {
    res.end("PUT Not supported!!");
}).delete(async (req, res) => {
    const deletedCustomers= await Customer.deleteMany({});
    res.json(deletedCustomers)
})

customerRoute.route('/:customerId').all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("content-type","application/json")
    next();
}).get(async (req,res)=>{
    const customer = await Customer.findById(req.params.customerId);
    res.json(customer)
}).post(async (req,res)=>{
    res.end("Not supported!")
}).delete(async (req,res)=>{
    const resp= await Customer.findByIdAndDelete(req.params.customerId);
    res.json(resp)
}).put(async (req,res)=>{ 
    //const updatedname =
    const updated= await  Customer.findByIdAndUpdate(req.params.customerId, {$set: req.body}, {new: true});
    res.json(updated)
})

export default customerRoute;