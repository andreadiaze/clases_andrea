import { Outlet } from 'react-router';

export const BlankLayout = () => {
  return (
    <main className="min-h-dvh bg-red-500">
      <Outlet />
    </main>
  );
};
