// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const ExercicioContext = () => {
  const { dados } = useContext(GlobalContext);
  console.log(global);
  if (dados === null) return null;
  return (
    <div>
      <h1>Produto: </h1>
      {dados.map((produto) => {
        <li key={produto.id}>{produto.nome}</li>;
      })}
    </div>
  );
};

export default ExercicioContext;
