const express = require('express')
const app = express();
const port = 3000;

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static('public'))

var url_controller = require('./controllers/urlController');

app.post('/api/url', url_controller.createUrl);
app.post('/api/url/bulk', url_controller.createUrlBulk);
app.get('/api/url', url_controller.getUrls);
app.get('/:short', url_controller.redirect);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})