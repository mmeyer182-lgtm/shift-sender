export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const response = await fetch('https://shiftbot-production-f32e.up.railway.app/post_shift', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await response.text();
      res.status(200).send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error sending shift');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
