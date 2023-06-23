import { Router } from 'express';
import { addUser, getUsers } from './user.service';
import { createUserInput } from './user.schema';
import ValidationGuard from '../../middlewares/validator';
import {
  // userAddPostHandler,
  // userGetHandler,
  userUpdateHandler,
  userDeleteHandler,
  userGetSingleHandler,
} from './user.handler';

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

// update User
controller.put('/:id', (req, res, next) =>
  userUpdateHandler(req, res).catch(next),
);

// delete User
controller.delete('/:id', (req, res, next) =>
  userDeleteHandler(req, res).catch(next),
);

// get single User
controller.get('/:id', (req, res, next) =>
  userGetSingleHandler(req, res).catch(next),
);

export default controller;
