import { Posts } from '@/features/posts/posts';
import { Link } from 'react-router';

export const HomeRoute = () => {
  return (
    <main>
      <h1>Hello Home</h1>

      <Posts />

      <Link to="/posts">Go to posts</Link>
    </main>
  );
};
