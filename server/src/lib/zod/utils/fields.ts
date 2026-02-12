import * as z from 'zod';

// ---------------------------
// IDS
// ---------------------------

export const uuid = z.uuid();

// ---------------------------
// COERCIONS
// ---------------------------

const coerceToPositiveInt = z.coerce.number().int().positive();
export const limit = coerceToPositiveInt;
export const page = coerceToPositiveInt;

// ---------------------------
// TEXTS
// ---------------------------

const text = z.string().trim().min(1).max(60);
export const content = text;
export const search = text;
