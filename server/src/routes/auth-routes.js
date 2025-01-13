// import { Router } from 'express';
// import { User } from '../models/users.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// // import dotenv from 'dotenv';
// // dotenv.config();

// export const login = async (req, res) => {

//   const { email, password } = req.body;
//   const user = await User.findOne({
//     where: { email },
//   });
//   if (!user) {
//     return res.status(401).json({ message: 'Authentication failed' });
//   }
//   console.log(user);

//   console.log('JWT_SECRET_KEY', process.env.JWT_SECRET_KEY);
//   console.log(`Is ${password} equal to ${user.password}?`);
  
//   const passwordIsValid = await bcrypt.compare(password, user.password);
//   if (!passwordIsValid) {
//     return res.status(401).json({ message: 'Authentication failed' });
//   }
  
//   const secretKey = process.env.JWT_SECRET_KEY || '';
//   const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
//   return res.json({ token });
// };

// const router = Router();

// // POST /login - Login a user
// router.post('/login', login);

// export default router;