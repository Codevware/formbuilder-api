import User from './user.model';

// get single user
export async function getSingleUser(id) {
  const user = await User.findById(id).select('-createdAt -updatedAt -__v');
  return user;
}

// get single user by Email
export async function getByEmail(email) {
  const user = await User.findOne({ email })
    .select('-createdAt -updatedAt -__v')
    .exec();
  return user;
}

// get all Users
export async function getUsers() {
  return await User.find({}).select('-createdAt -updatedAt -__v');
}

// create a user
export async function addUser(userInfo) {
  const user = new User(userInfo);
  await user.save();
  return user;
}

// update a user
export async function updateUser(id, userInfo) {
  const user = await User.findByIdAndUpdate(id, userInfo, { new: true });
  return user;
}

// delete a user
export async function deleteUser(id) {
  const user = await User.findByIdAndDelete(id);
  return user;
}
