utils / checkRole.js;
import { errorHandler } from "./error.js";

export const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      return next(
        errorHandler(403, "You do not have permission to access this resource")
      );
    }
    next();
  };
};
