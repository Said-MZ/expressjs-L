const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }
  console.log(process.env.JWT_SECRET);
  // just for demo, in real app we will check in database
  const id = new Date().getDate();
  // jwt
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  console.log(token, id, process.env.JWT_SECRET);

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100) + 1;
  res.status(200).json({
    msg: `Hello ${username}, here is your number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
