import { LandingLayout } from '@/components/layouts/landing-layout';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HomeRoute } from './routes/home.route';
import { NotFoundRoute } from './routes/not-found.route';
import { PostsRoute } from './routes/posts.route';

const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingLayout,
    children: [
      { index: true, Component: HomeRoute },
      { path: '/posts', Component: PostsRoute },
    ],
  },

  { path: '*', Component: NotFoundRoute },
]);

export const AppRouter = () => <RouterProvider router={router} />;
