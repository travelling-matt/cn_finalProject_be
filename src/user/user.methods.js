const User = require("./user.model");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  try {
    if (req.user = await User.findOne({email: req.body.email})) {
      throw new Error (`email already exists: ${req.body.email}`);
    } else {
      const user = await User.create(req.body);
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);
      res.status(200).send({ 
        user: user.email, 
        token, 
      });
    };
  }catch (error) {
    console.log(error);
    res.status(500).send({message: `${error}`});
  }
};

exports.login = async (req, res) => {
  try {
    const token = jwt.sign({ _id: req.user._id }, process.env.SECRET);
    res.status(200).send({ 
      user: req.user.email, 
      token, 
      message: `${req.user.email} successful log in`});
  } catch (error) {
    console.log(error);
  }
};

exports.addIngredients = async (req, res) => {
  try {
      const filter = { user : req.body.user }
      const update = { ingredients : req.body.ingredients }
      console.log(update)
      const ingredientAdded = await User.findOneAndUpdate(filter, update, {new:true});
      res.status(200).send({ 
        message:"ingredients updated",
        ingredientAdded
      });
    } catch (error) {
    console.log(error);
    res.status(500).send({message: `${error}`});
  }
};
