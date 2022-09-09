const User = require('../Models/User');

//1. Get All Signals
const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).exec();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ Error: 'Failed to Get Values', err });
  }
};

//A very dangerous operation
const deleteUsers = async (req, res) => {
  try {
    const signal = await User.deleteMany();
    res.status(200).json({ msg: 'Deleted Successfully' });
  } catch (err) {
    res.status(500).json({ Error: 'Failed to Update', err });
  }
};

module.exports = { getUsers, deleteUsers };
