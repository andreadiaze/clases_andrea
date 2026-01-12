import { Button } from '@/lib/shadcn/installed/components/ui/button';
import { Link } from 'react-router';

export const AuthActions = () => (
  <div className="flex items-center gap-2">
    <Button asChild>
      <Link to="#">Log in</Link>
    </Button>

    <Button variant="ghost" asChild>
      <Link to="#">Sign up</Link>
    </Button>
  </div>
);
