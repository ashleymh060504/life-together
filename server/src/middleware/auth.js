import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.sendStatus(401);
    }
    const secretKey = process.env.JWT_SECRET || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; 
      next();
    });
  } else {
    res.sendStatus(401).json({ error: 'Unauthorized: No token provided' });
  }
};