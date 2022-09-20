import './App.css';

//import OlaMundo from './components/OlaMundo';
//import Estudante from './components/Estudante';
//import { Vecna, Eleven } from './components/StrangerThings';
//import Calc from './components/calc';
//import IMC from './components/IMC';
//import Disciplina from './components/universidade/Disciplina';
//import Pai from './components/paiFilh/Pai';
//import Contador from './components/estados/Contador';
import VotaCidades from './components/estados/VotarCidades';


function App() {
  return (
    <div className="App">
      <VotaCidades />
    </div>
  );
};



/*function App() {
  return (
    <div className="App">
      <Disciplina titulo='Fundamentos de Programação'>
        <Estudante
          nome="Jefferson"
          curso="Design Digital"
          universidade="UFC Quixadá"
        />
        <Estudante
          nome="Wladimir"
          curso="Design Digital"
          universidade="UFC Quixadá"
        />
      </Disciplina>
    </div>
  );
}*/

export default App;
