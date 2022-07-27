import React from 'react';
import CustomButton from '../../components/CustomButton';
import { CustomText, FlexContainer, Header, Layout } from '../../components/Generals';
import { colors } from '../../library/constants/colors';
import { useNavigation } from '@react-navigation/native';
export const NewOrder = () => {

  const navigation = useNavigation();
  return (
    <Layout>
      <Header>
        <CustomText clr = {colors.dark} fz='25px' fw='bold'>New Order</CustomText>
      </Header>
      <FlexContainer h="92%">
        <CustomButton 
          w="90%"
          h="50px"
          title="CREATE NEW ORDER"
          onPress={()=>{navigation.navigate('menu')}}
        />
      </FlexContainer>
    </Layout>
  )
}
