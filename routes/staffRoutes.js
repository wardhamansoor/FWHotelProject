import { Router } from "express";
import Staff from "../models/staffs.js";

const staffRoute = Router();


// this '/' is '/staff' in index.js, right? so it'll proceed from there
staffRoute.route('/').all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    next()
}).get(async (req, res) => {
    const allStaffs= await Staff.find({});
    res.json(allStaffs)
}).post(async (req, res) => {
    const createdStaff= await Staff.create(req.body);
    res.json(createdStaff)
}).put(async (req, res) => {
    res.end("PUT Not supported!!");
}).delete(async (req, res) => {
    const deletedStaff= await Staff.deleteMany({});
    res.json(deletedStaff)
})

staffRoute.route('/:staffId').all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("content-type","application/json")
    next();
}).get(async (req,res)=>{
    const staff = await Staff.findById(req.params.staffId);
    res.json(staff)
}).post(async (req,res)=>{
    res.end("Not supported!")
}).delete(async (req,res)=>{
    const resp= await Staff.findByIdAndDelete(req.params.staffId);
    res.json(resp)
}).put(async (req,res)=>{
    const updated= await  Staff.findByIdAndUpdate(req.params.staffId, {$set: req.body}, {new: true});
    res.json(updated)
})



export default staffRoute;