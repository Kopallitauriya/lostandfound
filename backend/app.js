require('dotenv').config();

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const Router = require('./routes/index.router');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://lostandfound-client.vercel.app'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}));

app.enable('trust proxy');
app.use(express.json({limit: '50mb'}));
app.use('/', Router);


// app.get('/', function (req, res) {
//     ejs.renderFile(__dirname + '/views/newsletter.ejs', {items: data}, (err, data) => {
//         if (err)
//             console.log(err);
//         else
//             res.send(data);
//     });
// });


// app.get('/mail', async function (req, res) {
//     ejs.renderFile(__dirname + '/views/claim.ejs', {user: user, type: 0}, (err, data) => {
//         if (err)
//             console.log(err);
//         else
//             res.send(data);
//     });
// });

module.exports = app;
