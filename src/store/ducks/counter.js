import { createActions, createReducer } from 'reduxsauce';
import { v4 as uuidv4 } from 'uuid';

let data = [
  {
    id: uuidv4(),
    counter: 1,
    totalCounter: 1,
    selected: true,
  },
];

const initialState = {
  items: data,
};

export const { Types, Creators } = createActions({
  getAddCounter: ['counter'],
  getRemoveCounter: ['counter'],
  getUpdateCounter: ['counter'],
  setNewCounter: ['counter'],
  setChooseItem: ['id'],
});

const getAddCounter = (state = initialState, { counter }) => {
  return {
    ...state,
    items: [...state.items, counter],
  };
};

const getUpdateCounter = (state = initialState, { counter }) => {
  return {
    ...state,
    items: state.items,
  };
};

const getRemoveCounter = (state = initialState, { counter }) => {
  for (let i = 0; i < state.items.length; i++) {
    if (state.items[i].id === counter.id) {
      state.items.splice(i, 1);
      i--;
    }
  }

  return {
    ...state,
    items: state.items,
  };
};

const setNewCounter = (state = initialState, { counter }) => {
  return {
    ...state,
    items: [...state.items, counter],
  };
};

const setChooseItem = (state = initialState, { id }) => {
  state.items.map(i => {
    if (i.id === id) return (i.selected = true);
    else return (i.selected = false);
  });

  return {
    ...state,
    items: state.items,
  };
};

const counterHandlers = {
  [Types.GET_ADD_COUNTER]: getAddCounter,
  [Types.GET_UPDATE_COUNTER]: getUpdateCounter,
  [Types.GET_REMOVE_COUNTER]: getRemoveCounter,
  [Types.SET_NEW_COUNTER]: setNewCounter,
  [Types.SET_CHOOSE_ITEM]: setChooseItem,
};

export default createReducer(initialState, counterHandlers);
