const User = require("../../models/users");

//fetch all users
const getuser = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user });
};

//fetch user by id
const finduser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(400).json({ message: "user not found" });
  res.status(200).json({ user });
};

//delete a user
const deleteuser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.status(200).json({ message: "user deleted successfully" });
};
module.exports = {
  getuser,
  finduser,
  deleteuser,
};
