import auth from '../../middleware/auth';

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      req.user.tokens = req.user.tokens.filter((t) => {
        return t.token !== req.token
      })
      await req.user.save();
      res.status(200).send({ success: true, message: 'User logged out' });
    } else {
      res.status(404).json({ success: false, error: "method not allowed" });
    }
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

export default auth(handler);
