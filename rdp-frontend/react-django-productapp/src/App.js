import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Main from './components/Main';
import NavBar from './components/NavBar';
import data from './components/Data'

function App() {

  const { products } = data;

  return (
    <div className="App">
        <NavBar />
        <div className="card-container">
          <Main products={products} />
          <div className="vertical-card-container">
            <Cart />
            <About />
          </div>
        </div>
    </div>
  );
}

export default App;
