const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const port = process.env.PORT || 3000;
const dotenv = require('dotenv').config();
const meuMiddleware = require('./src/middlewares/middleware');

const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
app.use(helmet());

const sessionOptions = session({
    secret: 'açlskdaçslkdçalsdkaçlssdk(Y)',
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),

    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly:true
    }

});
app.use(sessionOptions);
app.use(flash());


const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('bancoDeDadosOn');
    app.emit('pronto');
})
.catch(e => console.log(e, 'error '));



//     estudar csurf  !!!!!!!!!!!!!!!!!!!!!!!!

//app.use(csrf());
app.use(meuMiddleware);

/*
const checkCsrfError = require('./src/middlewares/middleware');
const csrfMiddleware  = require('./src/middlewares/middleware');
app.use(csrfMiddleware);
// check  nao ta funcionando!!!!
app.use(checkCsrfError);

app.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') 
  
    // handle CSRF token errors here
    res.status(403)
    res.render('404')
    //return res.render
  })
  app.all('*', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.render('index')
  })

*/


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);



app.on('pronto',() => {
    app.listen(port, () => {
    console.log('servidor online = 3000')
});

});





