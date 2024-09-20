const jwt = require('jsonwebtoken');

const userAthenticate = (req,res,next) => {
    if(!req.headers.authorization) return res.status(400).json({
        msg : "unauthorized token"
    });

    const token = req.headers.authorization.split(' ')[1];
    try {
        if(!token){
            res.status(400).json({
                msg : "Token not found"
            }); 
        }else {
            const decoded = jwt.verify(token,process.env.SECRET_KEY);
            req.user = decoded;
            next();
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = userAthenticate;