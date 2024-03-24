/*
useMemo 
É um hook NATIVO do React, que permite memorizar, ou armazenar em cache, o resultado de uma função ou expressão. Ele é útil para melhorar o desempenho da aplicação, evitando cálculos desnecessário durante as renderizações!
Os principais pontos sobre o useMemo:

==> Propósito
* É usado para memorizar o valor de RETORNO de uma função
* Ajuda a evitar cálculos caros em cada renderização
* Particularmente útil quando tem cálculos computacionalmente custosos

==> Como funciona?
* Fornece uma função como primeiro argumento para o useMemo
* Essa função é executada e seu valor de retorno é armazenado em cache
* O segundo argumento é um array de dependências
* O valor memorizado só será recalculado quando as dependências no array forem atualizadas!

==> Exemplos de uso:
* Otimização na Renderização:
-- Sem o useMemo, a lista seria reprocessada a cada atualização, mesmo quando não há mudanças nos dados. Com o useMemo, podemos salvar a lista em uma variável e informar que ela só deve ser atualizada quando as dependências relevantes (como o estado que controla a exibição dos erros) mudarem.

-- Cálculos pesados: Se você tem cálculos que consomem muitos recursos, como filtragem ou ordenação de dados, o useMemo pode ajudar a evitar recálculos desnecessários.

*/

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
