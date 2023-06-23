import User from './user.model';

// get one User
export async function getUser(id) {
  return await User.findById(id).select('-__v');
}

// get all Users
export async function getUsers() {
  return await User.find({});
}
