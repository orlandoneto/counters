import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as counterActions } from '~/store/ducks/counter';
import { v4 as uuidv4 } from 'uuid';

import { Container, ContainerTotal, TotalLabel, TotalValue, Button, ButtonLabel } from './styles';

const CounterFooter = ({ total }) => {
  const dispatch = useDispatch();

  const handleCreateNewCount = useCallback(() => {
    dispatch(
      counterActions.setNewCounter({
        id: uuidv4(),
        counter: 1,
        totalCounter: 1,
        selected: false,
      })
    );
  }, []);

  return (
    <>
      <Container style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
        <ContainerTotal>
          <TotalLabel>Total counter:</TotalLabel>
          <TotalValue accessibilityLabel={`label-total-cesta`}>{total}</TotalValue>
        </ContainerTotal>

        <Button accessibilityLabel={'btn-seguir-entrega'} onPress={handleCreateNewCount}>
          <ButtonLabel>Add Counter</ButtonLabel>
        </Button>
      </Container>
    </>
  );
};

export default CounterFooter;
