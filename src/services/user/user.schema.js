import joi from 'joi';

export const createUserInput = joi.object({
  name: joi.string().required().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  role: joi.string(),
});

export const updateUserInput = joi.object({
  name: joi.string().required(),
  email: joi.string().email(),
  password: joi.string().min(6),
  role: joi.string(),
});
