const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
      };
    }
    case 'REMOVE_ITEM': {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'INCREASE': {
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'DECREASE': {
      const newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'GET_TOTALS': {
      let { total, amount } = state.cart.reduce(
        (result, current) => {
          const { price, amount } = current;
          result.amount += amount;
          result.total += amount * price;
          return result;
        },
        {
          total: 0,
          amount: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    }
    case 'LOADING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'GET_CART': {
      return {
        ...state,
        cart: action.payload.cart,
        loading: false,
      };
    }
    default: {
      throw new Error('no matching action type');
    }
  }
};

export default reducer;
