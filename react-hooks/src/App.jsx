import { useEffect } from 'react';
import ExercicioContext from './components/ExercicioContext';
import ExercicioState from './components/ExercicioState';
import Produto from './components/Produto';
import useFetch from './components/useFetch';

function App() {
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    const { res, json } = request(
      'https://ranekapi.origamid.dev/json/api/produto/',
    );
  }, []);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        <h1>Exercício API</h1>
        <ExercicioState />
        <Produto />

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </>
    );
  else return null;
}

export default App;
