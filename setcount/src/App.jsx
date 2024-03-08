import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div>
        <p>Total: {count}</p>
        <p>Preço: {count * 250}</p>
        <button onClick={() => setCount(count + 1)}>Comprar</button>
        <button onClick={() => setCount(1)}>Deletar</button>
      </div>
    </>
  );
}

export default App;
