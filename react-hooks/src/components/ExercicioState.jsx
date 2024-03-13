import React, { useState } from 'react';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const ExercicioState = () => {
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function fetchData(produto) {
    try {
      setCarregando(true);
      const res = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
      );
      if (!res.ok) {
        throw new Error('Erro ao carregar os dados.');
      }
      const data = await res.json();
      setProduto(data);
      console.log(data);
    } catch (error) {
      console.error('Houve um problema com a solicitação fetch:', error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          fetchData('tablet');
        }}
      >
        Tablet
      </button>
      <button
        onClick={() => {
          fetchData('smartphone');
        }}
      >
        Smartphone
      </button>
      <button
        onClick={() => {
          fetchData('notebook');
        }}
      >
        Notebook
      </button>
      {carregando && <p>Aguarde, carregando...</p>}
      {produto && (
        <div>
          <h2>{produto.nome}</h2>
          <img src={produto.fotos[0].src} style={{ width: '300px' }} />
          <p>Preço: R$ {produto.preco}</p>
        </div>
      )}
    </div>
  );
};

export default ExercicioState;
