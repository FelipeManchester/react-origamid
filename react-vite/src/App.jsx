import { useState } from 'react';

const App = () => {
  const [activeClient, setActiveClient] = useState('Luana');

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = activeClient === 'Luana' ? luana : mario;
  const totalCompra = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((acc, cur) => acc + cur);

  return (
    <div>
      <h1>Clientes</h1>
      <p>Selecionar cliente:</p>
      <button onClick={() => setActiveClient('Luana')}>Luana</button>
      <button onClick={() => setActiveClient('Mario')}>Mario</button>
      <div>
        <p>Nome: {activeClient}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Status:{' '}
          <span style={{ color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'Ativa' : 'Inativo'}
          </span>
        </p>
        <p>Valor gasto: R$ {totalCompra}</p>
        {totalCompra > 10000 && <p>Seu total passou de R$ 10.000 </p>}
      </div>
    </div>
  );
};

export default App;
