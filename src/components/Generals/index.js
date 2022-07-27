import styled from "styled-components/native";
import { colors } from "../../library/constants/colors";

export const Layout = styled.View`
  background-color: ${({clr}) => clr ?? 'transparent'};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: ${({p}) => p ?? '0px'};
`;

export const Header = styled.View`
  background-color: #FFDA00;
  height: 8%;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 10px;
`;

export const CustomText = styled.Text`
  font-weight: ${({fw}) => fw ?? 'normal'};
  color: ${({clr}) => clr ?? 'white'};
  font-size: ${({fz}) => fz ?? '12px'};
  text-align: ${({aln}) => aln ?? 'center'};
`;

export const FlexContainer = styled.View`
  background-color:${({bg}) => bg ?? 'transparent'};
  width: ${({w}) => w ?? '100%'};
  height: ${({h}) => h ?? '100%'};
  display: flex;
  align-items: ${({aln}) => aln ?? 'center'};
  justify-content: ${({jc}) => jc ?? 'space-around'};
  flex-direction: ${({dir}) => dir ?? 'row'};
  /* margin-top: 10px;
  margin-bottom: 10px; */
  border-bottom-width: 1px;
  border-bottom-color: ${({borderBot}) => borderBot ?? 'transparent'};
`;
