import React, { useEffect, useState } from 'react';
import ExercicioEffect from './ExercicioEffect';

const Produto = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // PEGA DADOS DO LOCALSTORAGE
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    // SALVA DADOS NO LOCALSTORAGE
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <ExercicioEffect produto={produto} />
    </div>
  );
};

export default Produto;
