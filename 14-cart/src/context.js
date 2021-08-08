import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // functions
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: { id } });
  };

  // useEffect
  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'LOADING' });
      const response = await fetch(url);
      const cart = await response.json();
      dispatch({ type: 'GET_CART', payload: { cart } });
    };

    getData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
