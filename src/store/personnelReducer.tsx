import { PersonnelStateType } from '../types/types';

type PersonnelActionType =
  | { type: 'INCREASE_ADULT' }
  | { type: 'DECREASE_ADULT' }
  | { type: 'INCREASE_CHILD' }
  | { type: 'DECREASE_CHILD' }
  | { type: 'INCREASE_INFANT' }
  | { type: 'DECREASE_INFANT' };

//todo: decrease,increase 함수로 합칠 수 있을듯
const personnelStateType = (
  state: PersonnelStateType,
  action: PersonnelActionType,
): PersonnelStateType => {
  if (action.type === 'INCREASE_ADULT') return { ...state, adult: Math.max(state.adult - 1, 0) };
  if (action.type === 'DECREASE_ADULT') return { ...state, adult: Math.min(state.adult - 1, 8) };
  if (action.type === 'INCREASE_CHILD') return { ...state, child: Math.max(state.child - 1, 0) };
  if (action.type === 'DECREASE_CHILD') return { ...state, child: Math.min(state.child - 1, 8) };
  if (action.type === 'INCREASE_INFANT') return { ...state, infant: Math.max(state.infant - 1, 0) };
  if (action.type === 'DECREASE_INFANT') return { ...state, infant: Math.min(state.infant + 1, 8) };
  return state;
};

export const initialPersonnelState: PersonnelStateType = {
  adult: 0,
  child: 0,
  infant: 0,
};

export default personnelStateType;
