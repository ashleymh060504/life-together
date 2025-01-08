const jwt = require('jsonwebtoken');

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; // No type assertion needed in JavaScript
      return next();
    });
  } else {
    res.sendStatus(401);
  }
};