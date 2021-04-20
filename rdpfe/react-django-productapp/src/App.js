import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty+1 } : x))
    }
    else {
      setCartItems([...cartItems,{...product, qty: 1}])
    }
  }
  
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty===1) {
      setCartItems(cartItems.filter((X)=> X.id !== product.id))
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty-1 } : x))
    }
  }

  const fetchData = () => {
    console.log("Fetching...");

    fetch('http://127.0.0.1:8000/api/product-list/')
      .then(response => response.json())
      .then(data => {
        console.log('Data:', data)
        setProducts(data)
      })
  }

  useEffect(() => fetchData(), [setCartItems]);


  return (
    <div className="App">
        <NavBar />
        <div className="card-container">
            <Main products={products} onAdd={onAdd}/>
          <div className="vertical-card-container">
            <Cart 
            cartItems={cartItems} 
            setCartItems={setCartItems}
            onAdd={onAdd} 
            onRemove={onRemove} 
            countCartItems={cartItems.length}/>
            <About />
          </div>
        </div>
    </div>
  );
}

export default App;
