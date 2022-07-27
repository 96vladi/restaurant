import React from 'react';
import Navigation from './src/navigators';
//Importar state de context
import FirebaseState from './src/context/firebase/firebaseState';
import OrdersState from './src/context/orders/ordersState';
const App = () => {
  
  return (
    <FirebaseState>
      <OrdersState>
        <Navigation/>
      </OrdersState>
    </FirebaseState>
  );
};

export default App;
