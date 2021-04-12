const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authoRoute = require('./routes/auth');
const authorityRoute = require('./routes/authrider');
const postRoute = require('./routes/posts');
const getRoute = require('./routes/get');
const putRoute = require('./routes/put');
// const postRoute = require('./routes/post');
const imageRoute = require('./routes/images');

dotenv.config();

//connect to db
 mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true},
     () => console.log('connected to db!')
);

//middleware
app.use(express.json());



//route midleware
app.use('/api/user', authoRoute);
app.use('/api/rider', authorityRoute);
app.use('/api/post', postRoute);
app.use('/api/get', getRoute);
app.use('/api/put', putRoute);
app.use('/image', imageRoute);

app.listen(3000, () =>console.log('server up and running'));