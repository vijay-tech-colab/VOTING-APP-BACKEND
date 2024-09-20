const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema  = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        require : true
    },
    email : {
        type : String
    },
    mobile : {
        type : String
    },
    address : {
        type :String,
        required : true
    },
    password : {
        type : String,
        required :true,
    },
    adharcard : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        enum : ['voter','admin'],
        default : 'voter'
    },
    isVoting : {
        type : Boolean,
        default : false
    }
});

userSchema.pre('save' ,async function (next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword  = await bcrypt.hash(user.password , salt);
        user.password = hashPassword;
    } catch (error) {
        console.log('Bcrypt error' , error);
    }
});

userSchema.methods.comparePassword = async function ( enteredPassword ) {
    try {
        const isMatch =  await bcrypt.compare(enteredPassword,this.password);
        return isMatch;
    } catch (error) {
        console.log('Bcrypt error' , error);
    }
}
userSchema.methods.generateToken = function ( payload ) {
    return jwt.sign(payload ,process.env.SECRET_KEY);
}

const User = new mongoose.model("User" ,userSchema);
module.exports = User;