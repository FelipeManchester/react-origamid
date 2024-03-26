import React, { useState } from 'react';
// Esse código tem como propósito criar um custom hook para fazer nossas requisições fetch a APIs. Como o fetch é algo "padrão" em todas as requisições, podemos criar um custom hook para facilitar o fetch no nosso código! DRY <<<
const useFetch = () => {
  const [data, setData] = useState(null); // Busca os dados na API
  const [error, setError] = useState(null); // Gerencia o estado de ERRO
  const [loading, setLoading] = useState(null); // Gerencia o estado de LOADING

  async function request(url, options) {
    let res;
    let json;
    try {
      setError(null);
      setLoading(true);
      res = await fetch(url, options);
      json = await res.json();
      setData(json);
    } catch (erro) {
      setError(erro);
    } finally {
      setLoading(false);
      return { res, json };
    }
  }

  return { data, error, loading, request };
};

export default useFetch;
