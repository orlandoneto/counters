import React from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { Creators as countActions } from '~/store/ducks/counter';
import { ContainerCounter, ShadowContainer, ValueArea, RowCounter, ValueCounter } from './styles';

const Counter = ({ index, item }) => {
  const dispatch = useDispatch();
  const handleSweetColor = item => dispatch(countActions.setChooseItem(item.id));

  return (
    <>
      <ContainerCounter accessibilityLabel={`Counter-index-${index}`}>
        <ShadowContainer style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
          <ValueArea onPress={() => handleSweetColor(item)} bg={item.selected ? '#d9d9d9' : 'white'}>
            <RowCounter>Counter {index + 1}</RowCounter>
            <ValueCounter>{item.counter}</ValueCounter>
          </ValueArea>
        </ShadowContainer>
      </ContainerCounter>
    </>
  );
};

export default Counter;
