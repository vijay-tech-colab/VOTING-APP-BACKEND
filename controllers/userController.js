const User = require("../models/user");

exports.userSignUp = async (req,res) => {
    try {
        
        const data = req.body;
        if(req.body.role === "admin") {
            const isAdmin = await User.findOne({ role: "admin"  });
            if(isAdmin) 
                return  res.status(200).json({msg : "admin already exists"});
        }
        const isUsesExist = await User.findOne({adharCard : req.body.adharCard});
        if(isUsesExist)
            return res.status(400).json({msg : "Already register plz login"});

        const user =  User(data);
        await user.save();
        const payload = {
            id : user._id
        };
        const token = user.generateToken(payload);
        res.status(201).json({
            msg : "success",
            user,
            token,
        })
    } catch (error) {
        res.status(500).json({msg : "Internal server error ",error});
    }
}

exports.userSignIn = async (req,res) => {
    try {
        const {adharCard,password} = req.body;
        const user = await User.findOne({adharCard});
        if(!user) return res.status(404).json({msg : "User not found"});
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(401).json({msg : "Invalid credentials"});
        const payload = {
            id : user._id
        };
        const token = user.generateToken(payload);
        res.json({msg : "login successfuly.",token});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Internal server error"});
    }
}
exports.userProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({msg : "User not found"});
        res.json({msg : "User profile",user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Internal server error"});
    }
}
exports.userPasswoedChanged = async (req, res) => {
    try {
        const userId = req.user.id;
        const {currentPassword,newPassword} = req.body;
        const user = await User.findById(userId);

        const isMatch = await user.comparePassword(currentPassword);
        if(!isMatch) return res.status(401).json({msg : "Invalid current password"});
        user.password =  newPassword;
        await user.save();
        res.json({msg : "Password changed successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Internal server error"});
    }
};