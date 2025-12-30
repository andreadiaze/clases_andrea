import { AppSidebar } from '@/lib/shadcn/ui/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/lib/shadcn/ui/sidebar';
import { Outlet } from 'react-router';

export const LandingLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </SidebarProvider>
  );
};
