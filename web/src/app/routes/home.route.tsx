import { Posts } from '@/features/posts/posts';
import { ModeToggle } from '@/lib/shadcn/dark-mode/mode-toggle';
import { Button } from '@/lib/shadcn/installed/components/ui/button';
import { Link } from 'react-router';
import { toast } from 'sonner';

export const HomeRoute = () => {
  const handleClickToaster = () => {
    toast.success('Event has been created.');
  };

  return (
    <>
      <h1>Hello Home</h1>

      <Posts />

      <ModeToggle />

      <Link to="/posts">Go to posts</Link>

      <Button onClick={handleClickToaster}>toaster</Button>
    </>
  );
};
