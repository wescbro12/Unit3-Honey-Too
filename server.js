const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
 const cors = require('cors')
// const router = require('./routes/api/project')


require('dotenv').config();
require('./config/database');

const app = express();

//MIDDLEWARE\\
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

//check if there is token and create req.user
app.use(require('./config/checkToken'));

//ROUTES- make sure they are before catch all\\
app.use('/api/projects', require('./routes/api/projects'))
app.use('/api/users', require('./routes/api/users'))

//CATCH-ALL ROUTE\\
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});















const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express app is on port ${port}`)
});