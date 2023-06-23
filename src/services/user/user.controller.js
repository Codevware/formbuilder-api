import { Router } from 'express';
import { addUser, getUsers } from './user.service';
import { createUserInput } from './user.schema';
import ValidationGuard from '../../middlewares/validator';
import {
  userAddHandler,
  userGetHandler,
  userUpdateHandler,
  userDeleteHandler,
  userGetSingleHandler,
} from './user.handler';

const controller = Router();

// add User
controller.post(
  '/',
  [ValidationGuard({ reqBody: createUserInput })],
  (req, res, next) => userAddHandler(req, res).catch(next),
);

// get all Users
controller.get('/', (req, res, next) => userGetHandler(req, res).catch(next));

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
