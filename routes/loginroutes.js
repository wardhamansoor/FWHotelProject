import { Router } from "express";
import customers from "../models/customers.js";

const logInRoute = Router();
logInRoute.route('/').all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("content-type","application/json")
    next();
}).get(async (req,res)=>{
    console.log("In Login Route")
    const { username, password } = req.body
    const customer  = await customers.findOne({ username, password })
    if(customer){
        res.send('Customer found---------LOGIN SUCCESSFULL----------');
        res.json(customer);
    }else{
        res.send('Customer not found---------LOGIN FAIL----------')
    }
})

export default logInRoute;