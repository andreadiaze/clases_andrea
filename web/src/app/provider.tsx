import { PostsContextProvider } from '@/features/posts/posts.context';
import { ThemeProvider } from '@/lib/shadcn/dark-mode/theme-provider';
import type { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => (
  <>
    {/* Shadcn dark-mode */}
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Rest of your app */}
      <PostsContextProvider>{children}</PostsContextProvider>
    </ThemeProvider>
  </>
);
