export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'POST' }))
} else {
  res.end(JSON.stringify({ name: 'kakka' }))
}
}