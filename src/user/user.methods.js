const User = require("./user.model");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.status(200).send({ user: user.email, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "An error has occured"});
  }
};

exports.login = async (req, res) => {
  try {
    const token = jwt.sign({ _id: req.user._id }, process.env.SECRET);
    res.status(200).send({ user: req.user.email, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "An error has occured"});
  }
};
