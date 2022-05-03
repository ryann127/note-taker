const express = require('express');
// const APIroutes = require('./routes/APIroutes');
const htmlroutes = require('./routes/htmlroutes');

const app = express();

const PORT = 3001;

// app.use('/api', APIroutes)

app.use('/', htmlroutes)

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);