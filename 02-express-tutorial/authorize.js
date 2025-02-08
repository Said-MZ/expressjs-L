const authorize = (req, res, next) => {
  const { pass } = req.query;
  if (pass === "123") {
    console.log("authorize");
    req.pass = pass;
    return next();
  } else {
    res.send("Unauthorized");
  }
};

module.exports = authorize;
