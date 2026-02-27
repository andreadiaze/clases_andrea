import { rolesService } from '@/features/roles/roles.service';
import {
  CreateRole,
  GetRoles,
  RolesParams,
  UpdateRole,
} from '@/lib/zod/schemas/roles.schema';
import { TypedRequest } from '@/types/typed-request';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getRoles = async (
  req: TypedRequest<{ query: GetRoles }>,
  res: Response,
) => {
  const result = await rolesService.getAll(req.query);
  res.json(result);
};

export const getRole = async (
  req: TypedRequest<{ params: RolesParams }>,
  res: Response,
) => {
  const result = await rolesService.get(req.params.id);
  res.json(result);
};

export const createRole = async (
  req: TypedRequest<{ body: CreateRole }>,
  res: Response,
) => {
  await rolesService.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: 'Role created successfully' });
};

export const updateRole = async (
  req: TypedRequest<{ params: RolesParams; body: UpdateRole }>,
  res: Response,
) => {
  await rolesService.update(req.params.id, req.body);
  res.json({ message: 'Role updated successfully' });
};

export const deleteRole = async (
  req: TypedRequest<{ params: RolesParams }>,
  res: Response,
) => {
  await rolesService.delete(req.params.id);
  res.sendStatus(StatusCodes.NO_CONTENT);
};
