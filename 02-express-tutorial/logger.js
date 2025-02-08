const logger = (req, res, next) => {
  console.log(req.url);
  console.log("loogger");
  next();
};

module.exports = logger;
