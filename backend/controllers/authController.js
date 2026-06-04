import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    console.log("userExists:", userExists);

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    console.log("Created user:", user);

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    });

  } catch (error) {
    console.error("registerError:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;   
    const user = await User.findOne({ email });             
    if (user && (await user.matchPassword(password))) {

        res.cookie("token", generateToken(user._id), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
      res.json({
        _id: user._id,      
        name: user.name,
        email: user.email,
        role: user.role,

        });
    } else {
        res.status(401).json({
            message: "Invalid email or password",
        });
    }   
    } catch (error) {
        console.error("loginError:", error);
        res.status(500).json({
            message: error.message,
        });
    } 
};  


export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json(req.user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};