const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();

nunjucks.configure(path.resolve(__dirname, 'views'), {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.render('index.html', {
    title: "hello world"
  })
})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000, function() {
  console.log('listening on 3000')
})
