import styled from 'styled-components/native';

export const ContainerCounter = styled.View`
  flex: 1;
  margin-bottom: 15px;
`;

export const ShadowContainer = styled.View`
  flex: 1;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
`;

export const ValueArea = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => props.bg};
  border-color: #666666;
  border-width: 1px;
  margin: 19px;
  height: 100px;
`;

export const RowCounter = styled.Text`
  margin-left: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #666666;
`;

export const ValueCounter = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: black;
  align-self: flex-end;
`;
