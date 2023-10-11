const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: 'Not Found',
        message: err.message,
        stackTrace: err.stack,
      });
    case 500:
      res.json({
        title: 'Validation Failed',
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      res.json({
        title: 'some weird shit',
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
