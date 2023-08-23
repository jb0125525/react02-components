
import './App.css';
import Despedida from './component/goodbye';
import Generation from './component/greeting/generation';
import Greeting from './component/greeting/greeting';
import  {Navbar, Footer} from './component/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Greeting/>
    <Despedida/>
    <Generation/>
      <Footer/>
    </div>
  );
}

export default App;
