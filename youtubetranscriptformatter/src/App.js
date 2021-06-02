import './App.css';
import {NavBar, Formatter, Parser, Header} from './layouts';

function App() {

  return (
    <div className="App bg-gradient-to-t from-blue-200 to-green-300 w-full grid grid-row flex items-center justify-center">
      <NavBar/>
      <Header name="Formatter"/>
      <Formatter/>
      <Header name="Transcript Find/Format"/>
      <Parser/>
    </div>
  );
}

export default App;
