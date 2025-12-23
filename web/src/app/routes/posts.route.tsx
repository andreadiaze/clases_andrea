import { useState } from 'react';

export const PostsRoute = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>Posts Route</h1>

      <h3>{counter}</h3>

      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </main>
  );
};
