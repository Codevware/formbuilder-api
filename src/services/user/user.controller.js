import { Router } from 'express';
import { addUser, getUsers } from './user.service';
import { createUserInput } from './user.schema';
import ValidationGuard from '../../middlewares/validator';

const controller = Router();

// add User
controller.post(
  '/',
  [ValidationGuard({ reqBody: createUserInput })],
  async (req, res, next) => {
    const { body } = req;
    const user = await addUser(body).catch(next);
    if (user) {
      return res.status(201).json({ message: 'user added successfully!' });
    }
  },
);

controller.get('/', async (req, res) => {
  const users = await getUsers();
  return res.json({ data: users });
});

export default controller;
