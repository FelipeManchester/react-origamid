/* 
UseRef
Pra que serve?
É um hook do React que permite REFERENCIAR UM VALOR que não é ncessário para renderização!
É bem similar ao uso do Document.querySelector do Javscript. porém ele NÃO é usado para selecionar elementos no DOM, mas sim para mantar a referência a eles. 

Exemplos de USO: Armazenar IDs de intervalos, controlar foco em campos de entrada... etc
Então o usamos quando precisamos criar e armazenar alguma referência a um elemento do HTML. Ele retorna um objeto de referência mutável que pode ser atualizado sem disparar uma nova renderização.


*/

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type='text'
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};
