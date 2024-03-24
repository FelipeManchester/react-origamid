/* 
useCallback

O useCallback é usado para MEMORIZAR FUNÇÕES
Ele retorna uma função memorizazda (um callback), a cada renderização no componente, o código é executado novamente. Isso significa que as funções são re-declaradas, criando novas funções na memória.
Usando o USECALLBACK, isso faz com que a função seja redefinida apenas quando necessário, mantendo a mesma referência.
O array de dependências determina quando o callback será redefinido.


*/

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
