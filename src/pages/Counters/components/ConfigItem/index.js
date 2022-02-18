import React, { useCallback } from 'react';
import { Platform } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  ContainerCounter,
  ShadowContainer,
  CounterArea,
  ValuePriceArea,
  AreaButton,
  LabelTotal,
  ButtonPlus,
  ButtonSubtract,
  ValueArea,
  ValueCounter,
  ButtonCloseArea,
  ButtonClose,
} from './styles';

import AddIcon from '~/assets/svg/add';
import TrashIcon from '~/assets/svg/trash';
import SubtractIcon from '~/assets/svg/subtract';

import { Creators as counterActions } from '~/store/ducks/counter';

const ConfigItem = ({ index, item }) => {
  const { items } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleCounterSubtract = useCallback(
    value => {
      const item = items.filter(i => i.id === value.id)[0];
      if (value.totalCounter !== 1) {
        value.counter--;
        value.totalCounter--;
        dispatch(counterActions.getUpdateCounter(value));
      }
    },
    [item]
  );

  const handleCounterPlus = useCallback(
    value => {
      const item = items.filter(i => i.id === value.id)[0];
      value.counter++;
      value.totalCounter++;
      dispatch(counterActions.getUpdateCounter(value));
    },
    [item]
  );

  const handleRemoveCounter = useCallback(
    value => {
      dispatch(counterActions.getRemoveCounter(value));
    },
    [item]
  );

  return (
    <>
      <ContainerCounter accessibilityLabel={`Counter-index-${index}`}>
        <ShadowContainer style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: 'rgba(0, 0, 0, 0.1)' } : ''}>
          <CounterArea accessibilityLabel={`Counter-index-${index}`}>
            {index > 0 && (
              <ButtonCloseArea>
                <ButtonClose accessibilityLabel='btn-exclui-counter' onPress={() => handleRemoveCounter(item)}>
                  <TrashIcon width='25' height='25' />
                </ButtonClose>
              </ButtonCloseArea>
            )}
          </CounterArea>

          <ValuePriceArea>
            <AreaButton style={Platform.OS !== 'ios' ? { elevation: 1, shadowColor: '#000' } : ''}>
              <ButtonSubtract accessibilityLabel='btn-retira-counter' onPress={() => handleCounterSubtract(item)}>
                <SubtractIcon width='14' height='14' />
              </ButtonSubtract>

              <LabelTotal accessibilityLabel={`${item.totalCounter}_count_${index}`}>{item.totalCounter}</LabelTotal>

              <ButtonPlus accessibilityLabel={'btn-add-counter'} onPress={() => handleCounterPlus(item)}>
                <AddIcon width='14' height='14' />
              </ButtonPlus>
            </AreaButton>

            <ValueArea>
              <ValueCounter>{item.counter}</ValueCounter>
            </ValueArea>
          </ValuePriceArea>
        </ShadowContainer>
      </ContainerCounter>
    </>
  );
};
export default ConfigItem;
