import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import CalendarContext from '../../store/CalendarContext';
import { isTwoDateSame, getIsPast } from '../../util/calenderUtil';

type WeekRowInfoType = {
  year: number;
  month: number;
  week: number[];
};

type DateStyleType = 'CHECK_IN' | 'CHECK_OUT' | 'BETWEEN' | null;
const WeekTableRow = ({ year, month, week }: WeekRowInfoType) => {
  const { checkedDate, dispatchCheckedDate } = useContext(CalendarContext);
  const onClickHandler = (event: React.MouseEvent) => {
    const clicked = (event.target as HTMLDivElement).dataset.date;
    const clickedDate = new Date(clicked);
    if (!checkedDate.checkIn || checkedDate.checkIn > clickedDate) {
      dispatchCheckedDate({
        type: 'CHECK_IN',
        payload: clickedDate,
      });
    } else {
      dispatchCheckedDate({
        type: 'CHECK_OUT',
        payload: clickedDate,
      });
    }
  };

  const onMouseHandler = (event: React.MouseEvent) => {
    if (!checkedDate?.checkIn) return;
    if (checkedDate.checkOut)
      return dispatchCheckedDate({
        type: 'HOVER',
        payload: checkedDate.checkOut,
      });

    const hovered = (event.target as HTMLDivElement).dataset.date;
    dispatchCheckedDate({
      type: 'HOVER',
      payload: new Date(hovered),
    });
  };

  const decideStyleType = (date: Date): DateStyleType => {
    if (!checkedDate?.checkIn) return null;
    if (isTwoDateSame(date, checkedDate?.checkIn)) {
      return 'CHECK_IN';
    }
    if (isTwoDateSame(date, checkedDate?.checkOut)) {
      return 'CHECK_OUT';
    }

    if (checkedDate?.checkIn < date && checkedDate?.hoveredDate > date) {
      return 'BETWEEN';
    }
    return null;
  };

  return (
    <WeekRow>
      {week.map((date) => {
        const currDateString = `${year}-${month}-${date}`;
        const currDateObj = new Date(currDateString);
        const styleType = decideStyleType(currDateObj);
        const isPast = getIsPast(new Date(), currDateObj);
        return (
          <DateBox date={date} key={currDateString} boxStyle={styleType}>
            <DateData
              data-date={currDateObj}
              dateStyle={styleType}
              isPast={isPast}
              onClick={onClickHandler}
              onMouseEnter={onMouseHandler}
            >
              {date}
            </DateData>
          </DateBox>
        );
      })}
    </WeekRow>
  );
};

const WeekRow = styled.tr`
  margin-bottom: 4px;
`;

const DateBox = styled.td<{ date: number; boxStyle: DateStyleType }>`
  visibility: ${({ date }) => (date <= 0 ? 'hidden' : 'visible')};
  width: 48px;
  height: 48px;
  background: ${({ boxStyle, theme }) =>
    boxStyle ? theme.colors.grey : theme.colors.white};
  border-radius: ${({ boxStyle }) => {
    if (boxStyle === 'CHECK_IN') return '50% 0 0 50%';
    if (boxStyle === 'CHECK_OUT') return '0 50% 50% 0';
    return '0';
  }};
`;

const DateData = styled.div<{
  dateStyle: DateStyleType;
  isPast: boolean;
}>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  width: 100%;
  height: 100%;
  font-weight: 800;
  font-size: 0.75rem;
  cursor: pointer;
  border-radius: 100%;

  ${({ dateStyle }) =>
    (dateStyle === 'CHECK_IN' || dateStyle === 'CHECK_OUT') &&
    css`
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ isPast }) =>
    isPast &&
    css`
      color: ${({ theme }) => theme.colors.lightGrey2};
      pointer-events: none;
    `}
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
  }
`;

export default WeekTableRow;
