const express = require('express')
const app = express()
const port = 3000

var url_controller = require('./controllers/urlController');

app.post('/api/url', url_controller.createUrl);
app.get('/api/url', url_controller.getUrls);
app.get('/:short', url_controller.redirect);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})