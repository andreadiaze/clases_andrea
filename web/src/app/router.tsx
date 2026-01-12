import { AppLayout } from '@/components/layouts/app-layout';
import { BlankLayout } from '@/components/layouts/blank-layout';
import { PublicLayout } from '@/components/layouts/public-layout';
import { PATHS } from '@/constants/paths';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppRoute } from './routes/app';
import { PostsRoute } from './routes/app/posts.route';
import { HomeRoute } from './routes/home.route';
import { NotFoundRoute } from './routes/not-found.route';

const router = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [{ path: '/', Component: HomeRoute }],
  },
  {
    Component: AppLayout,
    children: [
      { path: PATHS.APP, Component: AppRoute },
      { path: PATHS.APP_POSTS, Component: PostsRoute },
    ],
  },
  {
    Component: BlankLayout,
    children: [{ path: '*', Component: NotFoundRoute }],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
