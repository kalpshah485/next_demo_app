import auth from '../../middleware/auth';

async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      try {
        res.status(200).json({ success: true, data: req.user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    } else {
      res.status(404).json({ error: "method not allowed" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default auth(handler);