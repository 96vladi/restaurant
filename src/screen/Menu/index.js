import React, { useContext, useEffect } from 'react';
import {CustomText, Header, Layout} from '../../components/Generals';
import {colors} from '../../library/constants/colors';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../../context/firebase/firebaseContext';

export const Menu = () => {
  const navigation = useNavigation();
  //context firebase
  const { menu, getProducts } = useContext(FirebaseContext);
  useEffect(() => {
    console.log('1')
    getProducts();
    // console.log('6')
    // console.log(menu)
  }, [])
  
  return (
    <Layout>
      <Header>
        <CustomText
          aln="left"
          clr={colors.black}
          fw='bold'
          onPress={() => {
            navigation.goBack();
          }}>
          back
        </CustomText>
        <CustomText clr={colors.dark} fz="25px" fw="bold">
          Menu
        </CustomText>
      </Header>
    </Layout>
  );
};
