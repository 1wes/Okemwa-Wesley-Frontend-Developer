import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Capsules from './components/data-grid';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Capsules/>
    </div>
  );
}

export default App;
