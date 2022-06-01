import { PersonnelStateType, PersonnelType, PersonnelActionType } from './personnelTypes';
import { initialPersonnelState } from '../initialValues';

const personnelReducer = (
  state: PersonnelStateType,
  action: PersonnelActionType,
): PersonnelStateType => {
  if (action.type === 'INCREASE') {
    return handleIncreseAction(state, action.payload);
  }
  if (action.type === 'DECREASE') {
    return handleDecreaseAction(state, action.payload);
  }
  if (action.type === 'DELETE') {
    return initialPersonnelState;
  }
  throw new Error('invalid action');
};

const handleIncreseAction = (state: PersonnelStateType, target: PersonnelType) => {
  const newState = { ...state };
  if (['CHILD', 'INFANT'].includes(target) && state.ADULT === 0) {
    newState.ADULT = 1;
  }
  newState[target] = Math.min(state[target] + 1, 8);
  return newState;
};

const handleDecreaseAction = (state: PersonnelStateType, target: PersonnelType) => {
  const newState = { ...state };
  newState[target] = Math.max(state[target] - 1, 0);
  return newState;
};

export default personnelReducer;
