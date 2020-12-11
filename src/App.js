import logo from "./logo.svg";
import "./App.css";
// import Products from "./components/Products";
// import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Cart, Navbar, Products } from "./components";
import { Switch, Route } from "react-router-dom";

function App(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  console.log(products);
  console.log(cart);
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Switch location={props.location}>
        <Route
          exact
          path="/"
          component={() => (
            <Products products={products} onAddToCart={handleAddToCart} />
          )}
        />
        <Route exact path="/cart" component={() => <Cart cart={cart} />} />
      </Switch>
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
    </div>
  );
}

export default App;
