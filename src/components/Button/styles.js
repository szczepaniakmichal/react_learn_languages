import styled from "styled-components";
import { bluedeepskyblue, whitesmoke } from "../../configs/colors";

export const ButtonWrapper = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: ${(props) => props.isBolder ? '700' : '400'};
  padding: ${(props) => props.padding ? props.padding : '20px'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : bluedeepskyblue};
  color: ${(props) => props.color ? props.color : whitesmoke};
`;
