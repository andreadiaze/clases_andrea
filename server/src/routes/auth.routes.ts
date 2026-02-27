import {
  login,
  register,
  resendEmailVerification,
  verifyEmail,
} from '@/controllers/auth.controller';
import {
  loginSchema,
  registerSchema,
  resendEmailVerificationSchema,
  verifyEmailSchema,
} from '@/lib/zod/schemas/auth.schema';
import { zodValidator } from '@/middleware/zod-validator';
import { Router } from 'express';

export const authRoutes = Router();

authRoutes.post('/register', zodValidator({ body: registerSchema }), register);

authRoutes.post(
  '/verify-email',
  zodValidator({ body: verifyEmailSchema }),
  verifyEmail,
);

authRoutes.post(
  '/resend-email-verification',
  zodValidator({ body: resendEmailVerificationSchema }),
  resendEmailVerification,
);

authRoutes.post('/login', zodValidator({ body: loginSchema }), login);
