import bcrypt from 'bcrypt'
import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(user) {
            return res.status(401).json({success: false , message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name, email, password: hashedPassword
        })

        await newUser.save();
        return res.status(201).json({success: true, message: "User created successfully"});

    } catch (error) {
        console.log(error);
        return res.status(401).json({success: false, message: "Unable to register user"});
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        const hasAccount = await User.findOne({email});

        if(!hasAccount) {
            return res.status(401).json({success: false, message: "User not found"});
        }

        const validPassword = await bcrypt.compare(password, hasAccount.password);

        if(!validPassword) {
            console.log("Password is Incorrect");
            return res.status(401).json({success: false, message: "Password is incorrect"});
        }

        const token = jwt.sign({id: hasAccount._id}, process.env.JWT_SECRETKEY, {expiresIn: "5h"})

        return res.status(200).json(
            {
                success: true, 
                token, 
                user: {
                    name: hasAccount.name
                }, 
                message: "User logged in successfully"});
        } catch (error) {
        console.log(error);
        return res.status(401).json({success: false, message: "Unable to login"})
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
        httpOnly: true,
        sameSite : 'strict'
    });
    return res.status(200).json({success: true, message: "User logged out successfully"});
    } catch (error) {
        return res.status(401).json({success: false, message: "Unable to logout"});
    }
}

export {
    register,
    login,
    logout
};