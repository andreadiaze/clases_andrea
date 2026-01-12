import { Posts } from '@/features/posts/posts';
import { Button } from '@/lib/shadcn/installed/components/ui/button';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const PostsRoute = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [dog, setDog] = useState({ message: '' });

  useEffect(() => {
    const fetchResults = async () => {
      const results = await fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => data);

      setDog(results);
    };

    fetchResults();
  }, [counter]);

  useEffect(() => {
    console.log('input');
  }, [input]);

  const handleClickToaster = () => {
    toast('Event has been created.');
  };

  return (
    <>
      <h1>Posts Route</h1>

      <Button variant="outline">shadcn button</Button>

      <h3>{counter}</h3>
      <img src={dog.message}></img>

      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <Button onClick={handleClickToaster}>toaster</Button>

      <Posts />
    </>
  );
};
