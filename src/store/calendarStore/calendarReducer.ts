import { CalendarStateType, CalendarActionType } from './calendarType';
import { initialCalendarState } from '../initialValues';

const calendarReducer = (
  state: CalendarStateType,
  action: CalendarActionType,
): CalendarStateType => {
  if (action.type === 'CHECK_IN') return handleCheckInAction(state, action.payload);
  if (action.type === 'CHECK_OUT') return handleCheckOutAction(state, action.payload);
  if (action.type === 'HOVER') return handleHoverAction(state, action.payload);
  if (action.type === 'DELETE') return handleDeleteAction();
  throw new Error('invalid action');
};

const handleCheckInAction = (state: CalendarStateType, payload: Date): CalendarStateType => ({
  checkIn: payload,
  checkOut: null,
  hoveredDate: null,
});

const handleCheckOutAction = (state: CalendarStateType, payload: Date): CalendarStateType => ({
  ...state,
  checkOut: payload,
});

const handleHoverAction = (state: CalendarStateType, payload: Date | null): CalendarStateType => ({
  ...state,
  hoveredDate: payload,
});

const handleDeleteAction = (): CalendarStateType => initialCalendarState;

export default calendarReducer;
