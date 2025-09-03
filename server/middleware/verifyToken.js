import {secretKey} from '../routes/admin'
import jwt from "jsonwebtoken";
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token

  if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

  try {
    const decoded = jwt.verify(token, {secretKey});
    req.user = decoded; // attach user info
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}
