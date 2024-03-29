import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    console.log("created", newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const Signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found "));

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword)
      return next(errorHandler(401, "Username or email is incorrect"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {});

    const { password: hashedPassword, ...rest } = validUser._doc;

    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // Calculate expiry date (24 hours from now)
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
  }
};

export const Google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      const { password: hashedPassword, ...rest } = user._doc;

      const expiryDate = new Date(Date.now() + 360000); //1 hour

      res
        .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.floor(Math.random() * 10000).toString(),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

      const { password: hashedPassword2, ...rest } = newUser._doc;

      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // Calculate expiry date (24 hours from now)

      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {}
};
