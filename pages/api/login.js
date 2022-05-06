import connect from '../../mongodb/lib/conn';
import User from '../../mongodb/models/User';

export default async function handler(req, res) {
  await connect()
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error('Please Enter the required details');
      } else {
        const user = await User.findOne({ email: email })
        if (user && user.password === password) {
          const token = await user.makeAuthToken();
          res.status(200).json({ success: true, token: token });
        } else {
          throw new Error('wrong password');
        }
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(404).json({ error: "method not allowed" });
  }
}