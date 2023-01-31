import { comparePassword, hashPassword } from "../helpers/auth-helper.js";
import userModel from "../models/user-model.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validation
    if (!name) {
      return res.json({ error: "Name is require" });
    }
    if (!email) {
      return res.json({ error: "Email is require" });
    }
    if (!password) {
      return res.json({ error: "Password is require" });
    }
    if (!phone) {
      return res.json({ error: "Phone is require" });
    }
    if (!address) {
      return res.json({ error: "Adderss is require" });
    }
    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "Already Registed please Login",
      });
    }
    // register new user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      address,
      phone,
      password: hashedPassword,
    });
    user.save();

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in registerd",
      success: false,
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validate
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    // get user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email",
      });
    }
    // compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error In Login",
      error,
    });
  }
};


// test
export const testController=(req,res)=>{
   console.log('3')
   return res.send('Protected Routes')
   
}