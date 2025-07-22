import { useReducer, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // Reducer
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* <MovieContext.Provider value={{ cartData, setCartData }}> */}
      {/* Use Reducer */}
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <Toaster />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
