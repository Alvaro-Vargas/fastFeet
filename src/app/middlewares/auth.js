// Verify if the user is authenticated
// The JWT token is being sent in the rout/request header
import jwt from 'jsonwebtoken';

// Import this to allow using the async await in jwt.verify, otherwise the callback syntax would have to be used.
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the token exists
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  // Trim the header and keep just the token
  const [, token] = authHeader.split(' ');

  try {
    // The variable below have the un-encrypted payload. (which was defined in the sessionController == { id })
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // Add information from the payload to the req
    req.userId = decoded.id;
    req.isAdmin = decoded.admin;
    req.user_email = decoded.email;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
