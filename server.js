const express = require('express');
const APIroutes = require('./routes/APIroutes');
const htmlroutes = require('./routes/htmlroutes');


// set up server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// static middleware
app.use(express.static('./public'));

app.use('/api', APIroutes);
app.use('/', htmlroutes);


app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);