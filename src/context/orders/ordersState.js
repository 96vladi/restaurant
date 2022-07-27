import React, { useReducer } from 'react';
import OrdersReducer from './ordersReducer';
import OrdersContext from './ordersContext';

const OrdersState = (props) => {

  // console.log(firebase);
  //sate initial
  const initialState = {
    pedido: []
  }

  // useReducer con  dispatch para ejecutar la funciones
  const [ state, dispatch ] = useReducer(OrdersReducer, initialState); 

  return (
    <OrdersContext.Provider
      value = {{
        pedido: state.pedido
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
}

export default OrdersState;
