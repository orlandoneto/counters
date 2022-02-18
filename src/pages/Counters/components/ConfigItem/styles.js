import styled from 'styled-components/native';

export const ContainerCounter = styled.View`
  flex: 1;
  margin-bottom: 15px;
`;

export const ShadowContainer = styled.View`
  flex: 1;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
`;

export const CounterArea = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  background-color: #ffffff;
  border: 0.5px solid rgba(243, 243, 243, 10);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  border-width: 1px;
  border-bottom-width: 0px;
`;

export const ValuePriceArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  border: 0.5px solid rgba(243, 243, 243, 10);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  border-width: 1px;
`;

export const AreaButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 120px;
  margin-left: 10px;

  background-color: #ffffff;
  border: 2px solid rgba(243, 243, 243, 10);
  border-radius: 2px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
`;

export const LabelTotal = styled.Text`
  margin-top: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;

  color: #666666;
`;

export const ButtonPlus = styled.TouchableOpacity`
  padding: 10px 12px;
`;
export const ButtonSubtract = styled.TouchableOpacity`
  padding: 10px 12px;
`;

export const ValueArea = styled.View`
  margin: 19px;
`;

export const CounterRow = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 19px;

  color: #666666;
`;

export const ButtonCloseArea = styled.View``;
export const ButtonClose = styled.TouchableOpacity`
  flex: 1;
  padding: 8px;
`;

export const ValueCounter = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  color: black;
  align-self: flex-end;
`;
