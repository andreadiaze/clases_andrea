import { Outlet } from 'react-router';
import { AuthActions } from '../ui/auth-actions';
import { Footer } from '../ui/footer';
import { Main } from '../ui/main';
import { SettingsActions } from '../ui/settings-actions';

export const PublicLayout = () => (
  <div className="flex min-h-dvh flex-col">
    <header className="border-b">
      <div className="container mx-auto flex items-center gap-2 border-x p-2">
        <div className="flex-1" />
        <AuthActions />
        <SettingsActions />
      </div>
    </header>

    <Main>
      <Outlet />
    </Main>

    <Footer />
  </div>
);
