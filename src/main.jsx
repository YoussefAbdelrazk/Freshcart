import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { WishlistProvider } from "./context/wishListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <UserProvider>
        <CartProvider>
          <WishlistProvider>
              <App />
          </WishlistProvider>
        
        </CartProvider>
        <ToastContainer position="top-center" />
      </UserProvider>
    </Provider>
  </>
);
