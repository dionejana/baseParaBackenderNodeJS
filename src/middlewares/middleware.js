module.exports = (req, res , next) => {

 // if(req.body.cliente) {console.log();
  console.log('passei no'); 
  
  next();
};

/*
exports.checkCsrfError = (err , req , res , next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('404');
  };
};

exports.csrfMiddleware = (req ,res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};*/