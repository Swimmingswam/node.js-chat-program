var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//另一种导入routes写法
var routes = require('./routes');
app.get('/',routes.index)
// app.use('/users', usersRouter);
// app.get('/about',function(req,res){
//   res.send('hello about')
// });
// app.post('/',function(req,res){
//   res.send(req.body)
// });
// app.get('/users/:id',function(req,res){
//   res.send('show id:'+req.params.id);
// });
app.get('/hh',function(req,res){
  var user = {
    first_name:'swimming',
    surename:'zym',
    tel:'125462351'
  };
  res.render('hh.ejs',{title:'User',user:user})
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(2000); //修改端口

module.exports = app;
