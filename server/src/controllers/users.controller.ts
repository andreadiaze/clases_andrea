import { usersService } from '@/features/users/users.service';
import {
  GetUsers,
  UpdateUser,
  UpdateUserMe,
  UpdateUserMeEmail,
  UpdateUserMePassword,
  UsersParams,
} from '@/lib/zod/schemas/users.schema';
import { TypedRequest } from '@/types/typed-request';
import { requireReqUser } from '@/utils/require-req-user';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// ---------------------------
// ROUTES: /users/me
// ---------------------------

export const getUserMe = async (req: Request, res: Response) => {
  const user = requireReqUser(req);

  const result = await usersService.get(user.id);
  res.json(result);
};

export const updateUserMe = async (
  req: TypedRequest<{ body: UpdateUserMe }>,
  res: Response,
) => {
  const user = requireReqUser(req);

  await usersService.update(user.id, req.body);
  res.json({ message: 'User updated successfully' });
};

export const updateUserMePassword = async (
  req: TypedRequest<{ body: UpdateUserMePassword }>,
  res: Response,
) => {
  const user = requireReqUser(req);

  await usersService.updatePassword(user.id, req.body);
  res.json({ message: 'Password updated successfully' });
};

export const updateUserMeEmail = async (
  req: TypedRequest<{ body: UpdateUserMeEmail }>,
  res: Response,
) => {
  const user = requireReqUser(req);

  await usersService.requestEmailUpdate(user.id, req.body);
  res.json({ message: 'Verification email will be sent shortly' });
};

// ---------------------------
// ROUTES: /users + /users/:id
// ---------------------------

export const getUsers = async (
  req: TypedRequest<{ query: GetUsers }>,
  res: Response,
) => {
  const result = await usersService.getAll(req.query);
  res.json(result);
};

export const getUser = async (
  req: TypedRequest<{ params: UsersParams }>,
  res: Response,
) => {
  const result = await usersService.get(req.params.id);
  res.json(result);
};

export const updateUser = async (
  req: TypedRequest<{ params: UsersParams; body: UpdateUser }>,
  res: Response,
) => {
  const user = requireReqUser(req);

  await usersService.update(req.params.id, req.body, { callerId: user.id });
  res.json({ message: 'User updated successfully' });
};

export const deleteUser = async (
  req: TypedRequest<{ params: UsersParams }>,
  res: Response,
) => {
  const user = requireReqUser(req);

  await usersService.delete(req.params.id, { callerId: user.id });
  res.sendStatus(StatusCodes.NO_CONTENT);
};
