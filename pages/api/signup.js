import connect from '../../mongodb/lib/conn';
import User from '../../mongodb/models/User';

export default async function handler(req, res) {
  await connect()
  if (req.method === 'POST') {
    try {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
        res.status(409).json({ success: false, error: "User already exists" });
      } else {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(404).json({ success: false, error: "method not allowed" });
  }
}