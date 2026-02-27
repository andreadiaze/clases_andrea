import { authService } from '@/features/auth/auth.service';
import {
  Login,
  Register,
  ResendEmailVerification,
  VerifyEmail,
} from '@/lib/zod/schemas/auth.schema';
import { TypedRequest } from '@/types/typed-request';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const register = async (
  req: TypedRequest<{ body: Register }>,
  res: Response,
) => {
  await authService.register(req.body);
  res.status(StatusCodes.CREATED).json({
    message: 'Registration successful. Verification email will be sent shortly',
  });
};

export const verifyEmail = async (
  req: TypedRequest<{ body: VerifyEmail }>,
  res: Response,
) => {
  await authService.verifyEmail(req.body);
  res.json({ message: 'Email verified successfully' });
};

export const resendEmailVerification = async (
  req: TypedRequest<{ body: ResendEmailVerification }>,
  res: Response,
) => {
  const { email } = await authService.resendEmailVerification(req.body);
  res.json({
    message: `Verification email will be sent shortly to ${email}`,
  });
};

export const login = async (
  req: TypedRequest<{ body: Login }>,
  res: Response,
) => {
  const result = await authService.login(req.body);
  res.json(result);
};
