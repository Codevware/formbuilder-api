import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import { addUser, getUsers } from './user.service';
import { createUserInput } from './user.schema';

const controller = Router();
const guard = createValidator({});

// add User
controller.post('/', [guard.fields(createUserInput)], async (req, res) => {
  const { body } = req.body;
  const user = await addUser(body);
  if (user) {
    return res.status(201).json({ message: 'user added successfully!' });
  }

  return; // void
});

controller.get('/', async (req, res) => {
  const users = await getUsers();
  return res.json({ data: users });
});

export default controller;
