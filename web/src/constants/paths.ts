export const SEGMENTS = {
  APP: '/app',
  POSTS: '/posts',
} as const;

export const PATHS = {
  APP: SEGMENTS.APP,
  APP_POSTS: `${SEGMENTS.APP}${SEGMENTS.POSTS}`,
} as const;
