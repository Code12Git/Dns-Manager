const {userModel} = require('../models')
const _ = require('lodash')
const {BAD_REQUEST,CONFLICT,UNAUTHORIZED} =  require('../utils/errors')
const {fromEnv,AppError}=require('../utils')
const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const signup = async(body) => {
    const {email,username,password} = body;
    try{
        if(_.isEmpty(email) || _.isEmpty(username) || _.isEmpty(password)){
            const error = BAD_REQUEST
            error.message = 'Please enter all required fields'
            throw new AppError(error.code,error.message,error.statusCode)
        }
        const isUserExist = await userModel.findOne({ username });

        if(isUserExist) {
           const error=CONFLICT
            error.message="Username Already exists"
            throw new AppError(error.code, error.message, error.statusCode)
        }
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);
        const user=await userModel.create({username,email,password:hashedPassword});
        return user
    }catch(err){
        throw err;
    }
}

const signin = async(body) => {
    const {username,password} = body;
    try{
         if(_.isEmpty(username) || _.isEmpty(password)){
            const error = BAD_REQUEST
            error.message = 'Please enter all required fields'
            throw new AppError(error.code,error.message,error.statusCode)
        }
        const user = await userModel.findOne({ username });

        if(!user) {
            const error=CONFLICT
            error.message="Username not exists"
            throw new AppError(error.code, error.message, error.statusCode)
        }
        const isPasswordValid =  bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = { ...UNAUTHORIZED };
            error.message = "Invalid password";
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const token = jwt.sign({ username }, fromEnv('JWT_SECRET'), { expiresIn: '1h' });
        return {user,token}
    }catch(err){
        throw err;
    }   
}

module.exports  = {signup,signin}