import React, {useReducer} from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebase from '../../library/methods/firebase';
import {GET_PRODUCTS} from '../../types';
import {collection, query, where, onSnapshot} from 'firebase/firestore';

const FirebaseState = props => {
  // console.log(firebase);
  //sate initial
  const initialState = {
    menu: [],
  };

  // useReducer con  dispatch para ejecutar la funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  //Funcion que se ejecuta para obtener los productos
  const getProducts = () => {
   // Consultar firebase
    const q = query(collection(firebase.db, 'Productos'), where('existence', '==', true));
    const result = onSnapshot(q, querySnapshot => {
      handleSnapshot(querySnapshot);
    });
    function handleSnapshot(snapshot){
      let cymbals = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      //Tenemos resultado
      dispatch({
        type: GET_PRODUCTS,
        payload: cymbals
      });
      console.log(state)
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        getProducts,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
