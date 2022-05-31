export type CalendarStateType = {
  checkIn: Date | null;
  checkOut: Date | null;
  hoveredDate: Date | null;
};

export type PersonnelStateType = {
  adult: number;
  child: number;
  infant: number;
};
