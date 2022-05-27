import { CalendarStateType } from '../types/types';

type CalendarActionType =
  | { type: 'CLICK'; payload: Date }
  | { type: 'HOVER'; payload: Date }
  | { type: 'DELETE'; payload: null };

const calendarReducer = (
  state: CalendarStateType,
  action: CalendarActionType,
): CalendarStateType => {
  if (action.type === 'CLICK') return handleClickAction(state, action.payload);
  if (action.type === 'HOVER') return handleHoverAction(state, action.payload);
  if (action.type === 'DELETE') return handleDeleteAction();
  return state;
};

const handleClickAction = (
  state: CalendarStateType,
  payload: Date,
): CalendarStateType => {
  if (!state.checkIn || state.checkIn > payload) {
    return {
      checkIn: payload,
      checkOut: null,
      hoveredDate: null,
    };
  }
  return {
    ...state,
    checkOut: payload,
  };
};

const handleHoverAction = (
  state: CalendarStateType,
  payload: Date,
): CalendarStateType => {
  if (state.checkOut) return { ...state, hoveredDate: state.checkOut };
  return { ...state, hoveredDate: payload };
};

const handleDeleteAction = (): CalendarStateType => initialCalendarState;

export const initialCalendarState: CalendarStateType = {
  checkIn: null,
  checkOut: null,
  hoveredDate: null,
};

export default calendarReducer;
