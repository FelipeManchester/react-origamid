import ExercicioContext from './components/ExercicioContext';
import ExercicioState from './components/ExercicioState';
import Produto from './components/Produto';

function App() {
  return (
    <>
      <h1>Exercício API</h1>
      <ExercicioState />
      <Produto />
    </>
  );
}

export default App;
