const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../user/user.model");

exports.tokenDecoding = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer", "");
        const decodedToken = await jwt.verify(token, process.env.Secret);
        req.user = await User.findById(decodedToken._id);
        if (req.user){
            next();
        }else{
            throw new Error();
        }
    }catch(err){
        console.log(err)
    }


};

exports.hashPassword = async (req, res, next) =>{
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next()
    }catch (err){
        console.log(err)
    }
};

exports.decryptPassword = async (req, res, next) =>{
    try{
        req.user = await User.findOne({email: req.body.email});
        if (await bcrypt.compare(req.body.password, req.user.password)){
            next();
        }else{
            throw new Error ();
        }

    }catch(err){
        console.log(err)
    }
}