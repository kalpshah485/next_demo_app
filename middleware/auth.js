import jwt from 'jsonwebtoken';
import User from '../mongodb/models/User';
import connect from '../mongodb/lib/conn';

const auth = (handler) => {
  return async (req, res) => {
    await connect();
    const bearerHeader = req.headers.authorization;
    const bearerToken = bearerHeader.split(' ')[1];
    try {
      if (bearerToken && bearerToken !== "null") {
        const verifyToken = jwt.verify(bearerToken, process.env.TOKEN_SECRET);
        const user = await User.findOne({ _id: verifyToken._id, "tokens.token": bearerToken });
        if (!user) {
          throw new Error('User not Found');
        }
        req.user = user;
        req.token = bearerToken;
        return handler(req, res)
      } else {
        return res.status(401).json({ success: false, message: 'Invalid bearer token' })
      }
    } catch (err) {
      return res.status(401).json({ success: false, error: { message: err.message } })
    }
  }
}
export default auth;