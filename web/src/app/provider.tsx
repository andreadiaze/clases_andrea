import { PostsContextProvider } from '@/features/posts/posts.context';
import { ShadcnProvider } from '@/lib/shadcn/shadcn-provider';
import type { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => (
  <ShadcnProvider>
    <PostsContextProvider>{children}</PostsContextProvider>
  </ShadcnProvider>
);
