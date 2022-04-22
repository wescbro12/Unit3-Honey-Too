const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const router = require('./routes/api/project')


require('dotenv').config();
require('./config/database');

const app = express();

//MIDDLEWARE\\
app.use(logger('dev'));
app.use(express.json());
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// app.use(express.urlencoded({ extened: true }))

// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// })

//ROUTES\\
app.use('/', router)

//CATCH-ALL ROUTE\\
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});















const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express app is on port ${port}`)
});