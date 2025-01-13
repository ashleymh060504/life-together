// import jwt from 'jsonwebtoken';
// // import { Router } from 'express';
// // import { Chores } from '../models/index.js';

// // import dotenv from 'dotenv';
// // dotenv.config();

// export const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     const secretKey = process.env.JWT_SECRET_KEY || '';

//     jwt.verify(token, secretKey, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user; // No type assertion needed in JavaScript
//       console.log('Okayyyy');
//       return next();
//     });
//   } else {
//     res.status(401).json({ message: 'Not authorized' });
//   }
// };

// // const router = Router();

// // router.get('/chores', authenticateToken, async (req, res) => {
// //   try {
// //     const userId = req.user.id;
// //     const chores = await Chores.findAll({
// //       where: {
// //         user_id:  userId
// //       }
// //     });
// //     res.json(chores);
// //   } 
// //   catch (err) {
// //     console.error('Error fetching chores:', err.message);
// //     res.status(500).json({ message: 'An error occurred while fetching chores.' });
// //   }
// // })

// // // Uncomment once done