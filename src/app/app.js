import express from 'express';
import logger from 'morgan';
import createError from 'http-errors';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import router from '../app/routes/search'

const app = express();
const port = process.env.PORT || 8080

app.set('port', port);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('../public'));
app.use(logger('dev'));
app.use(session({
    secret: 'andersonmendesdev',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 10*60*1000
    }
}))

router(app);

app.use((req, res, next) => {
    next(createError(404));
})
app.use((err, req, res, next) =>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'? err: {};
    res.status(err.status || 500);
    res.render('error/error');
})
export default app
