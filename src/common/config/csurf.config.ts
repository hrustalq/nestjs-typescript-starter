import * as csurf from 'csurf';

export const csurfConfig: csurf.CookieOptions = {
  key: '_csrf',
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: Number(process.env.CSURF_MAX_AGE) || 3600,
  sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
};
