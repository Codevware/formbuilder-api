import {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} from './user.service';

// add User handler
const userAddPostHandler = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await addUser({ name, email, password, role });
  if (user) {
    return res.status(201).json({ message: 'User added successfully!' });
  }
  return res.status(404).json({ message: 'Failed to add user' });
};

// get all Users handler
const userGetHandler = async (req, res) => {
  const users = await getUsers();
  return res.json({ data: users });
};

// UPDATE User handler
const userUpdateHandler = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const user = await updateUser(id, { name, email, password, role });
  if (user) {
    return res.status(200).json({ message: 'User updated successfully!' });
  }
  return res.status(500).json({ message: 'Failed to update user' });
};

// DELETE User handler
const userDeleteHandler = async (req, res) => {
  const { id } = req.params;
  const user = await deleteUser(id);
  if (user) {
    return res.status(200).json({ message: 'User deleted successfully!' });
  }
  return res.status(500).json({ message: 'Failed to delete user' });
};

// Single User handler
const userGetSingleHandler = async (req, res) => {
  const { id } = req.params;
  const user = await getSingleUser(id);
  if (user) {
    return res.status(200).json({ data: user });
  }
  return res.status(404).json({ message: 'User not found' });
};

export {
  userAddPostHandler,
  userGetHandler,
  userUpdateHandler,
  userDeleteHandler,
  userGetSingleHandler,
};
