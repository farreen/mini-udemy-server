import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export const protect = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token)
        return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(token, env.jwt.secret);
        req.user = decoded;
        next();
    }
    catch {
        res.status(401).json({ message: "Token invalid or expired" });
    }
};
export const allowRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};
//# sourceMappingURL=auth.middleware.js.map