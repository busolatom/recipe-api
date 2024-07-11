import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";


export const register = async (req, res, next) => {
  try {
    // Hash user password
    const hashedPass = bcrypt.hashSync(req.body.password, 10);
    // Create a new user
    await UserModel.create({
      ...req.body,
      password: hashedPass
    })
    // Generate a session to login user immediately after registration
    req.session.user = { id: user.id }
    // Return response
    res.status(201).json('User resgistration succesful')
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const { userName, phone, email, password } = req.body;
    // Find a user using their unique identifier either email, username, phone
    const user = await UserModel.findOne(
      // { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
      { $or: [{ email: email }, { userName: userName }, { phone: phone }] }
    );
    if (!user) {
      return res.status(401).json('No user found')
    }
    // Verify their password
    const correctPass = bcrypt.compareSync(password, user.password);
    if (!correctPass) {
      return res.status(401).json('Invalid credentials')
    }
    // Generate a session for the user, session once generated becomes cookies and tracks your activities on the site,
    // the cookie only loses its potency when your session expires
    req.session.user = { id: user.id }
    // Return response
    res.status(200).json('Login successful')
  } catch (error) {
    next(error)
  }
}

export const logout = async (req, res, next) => {
try {
    // Destroy user session
   await req.session.destroy();
  //  Return response
  res.status(200).json('Logout successful')
} catch (error) {
  next(error)
}
}

export const profile = async (req, res, next) => {
  try {
    // Find a user by their id
    const user = await UserModel
      .findById(req.session.user.id)
      .select({ password: false })
    // Return response
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
} 