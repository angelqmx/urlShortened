const express = require('express')
const app = express()
const port = 3000


app.post('/url', (req, res) => {
  return res.send('POST HTTP method on url resource');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})