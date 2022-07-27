import styled from "styled-components/native";
import { colors } from "../../library/constants/colors";

export const ButtonDesing = styled.TouchableOpacity`
  background-color: ${colors.yellow};
  width: ${({w}) => w ?? '100px'};
  height: ${({h}) => h ?? '100px'};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
