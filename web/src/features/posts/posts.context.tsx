import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

interface PostsContextType {
  values: string;
  setValues: Dispatch<SetStateAction<string>>;
}

export const PostsContext = createContext<PostsContextType>('initial');

export const PostsContextProvider = ({ children }: PropsWithChildren) => {
  const [values, setValues] = useState('initial');

  return (
    <PostsContext.Provider value={{ values, setValues }}>
      {children}
    </PostsContext.Provider>
  );
};
