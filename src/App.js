import logo from "./logo.svg";
import "./App.css";
// import Products from "./components/Products";
// import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Cart, Navbar, Products, Checkout } from "./components";
import { Switch, Route, useLocation } from "react-router-dom";
import { SentimentVeryDissatisfied } from "@material-ui/icons";

function App(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // const location = useLocation();
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const NotFound = ({ location }) => (
    <div style={{ marginTop: "20%", color: "red" }}>
      <h2>
        404 Error.
        <br />
        <SentimentVeryDissatisfied /> Path:{" "}
        <i style={{ color: "grey" }}>{location.pathname}</i> Not Found
      </h2>
    </div>
  );
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

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
        <Route
          exact
          path="/cart"
          component={() => (
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          )}
        />
        <Route
          exact
          path="/checkout"
          component={() => (
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
              refreshCart={refreshCart}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
    </div>
  );
}

export default App;
