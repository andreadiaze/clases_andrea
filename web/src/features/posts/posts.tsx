import { Button } from '@/lib/shadcn/installed/components/ui/button';
import { useContext } from 'react';
import { PostsContext } from './posts.context';

export const Posts = () => {
  const { values, setValues } = useContext(PostsContext);

  return (
    <>
      <h1>Posts</h1>
      <p>{values}</p>

      <Button onClick={() => setValues('valor prueba')}>Click me</Button>
    </>
  );
};
