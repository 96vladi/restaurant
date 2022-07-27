import React from 'react'
import { CustomText } from '../Generals'
import { ButtonDesing } from './styledComponent'

const CustomButton = ({ w, h, title, onPress }) => {
  return (
    <ButtonDesing 
      w={w} 
      h={h}
      onPress = {onPress}>
      <CustomText clr="black" fw="bold" fz="15px">{title}</CustomText>
    </ButtonDesing>
  )
}

export default CustomButton
