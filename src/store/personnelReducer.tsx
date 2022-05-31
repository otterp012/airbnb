import { PersonnelStateType } from '../types/types';

type PersonnelActionType =
  | { type: 'INCREASE'; payload: 'ADULT' | 'CHILD' | 'INFANT' }
  | { type: 'DECREASE'; payload: 'ADULT' | 'CHILD' | 'INFANT' };

const personnelReducer = (
  state: PersonnelStateType,
  action: PersonnelActionType,
): PersonnelStateType => {
  if (action.type === 'INCREASE') return handleIncreseAction(state, action.payload);
  if (action.type === 'DECREASE') return handleDecreaseAction(state, action.payload);
  return state;
};

const handleIncreseAction = (state: PersonnelStateType, target: 'ADULT' | 'CHILD' | 'INFANT') => {
  const newState = { ...state };
  if (['CHILD', 'INFANT'].includes(target) && state.ADULT === 0) {
    newState.ADULT = 1;
  }
  newState[target] = Math.min(state[target] + 1, 8);
  return newState;
};

const handleDecreaseAction = (state: PersonnelStateType, target: 'ADULT' | 'CHILD' | 'INFANT') => {
  const newState = { ...state };
  newState[target] = Math.max(state[target] - 1, 0);
  return newState;
};

export const initialPersonnelState: PersonnelStateType = {
  ADULT: 0,
  CHILD: 0,
  INFANT: 0,
};

export default personnelReducer;
