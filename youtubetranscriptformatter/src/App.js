import './App.css';
import {NavBar, IntroSec, Tools} from './layouts';

function App() {

  return (
    <div className="App w-full h-full grid grid-row flex items-center justify-center">
      <NavBar/>
      <IntroSec/>     
      <Tools/>
   
    </div>
  );
}

export default App;
