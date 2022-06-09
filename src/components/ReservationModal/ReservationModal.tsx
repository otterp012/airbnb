import React from 'react';
import styled, { css } from 'styled-components';
import CustomModal from '@UI/Modal';
import PricePerDay from './PricePerDay';
import ReservationInfos from './ReservationInfos';

const sampleData = {
  lng: 127.10646784388724,
  lat: 37.544549059226995,
  roomId: 1,
  name: '나무호텔',
  address: '서울특별시 광진구 광장동 327-1',
  imgSrc: 'https://loremflickr.com/320/240/hotel,room?lock=1',
  maxPersonnel: 5,
  price: 897647,
  cleaningCostRatio: 0.02,
  serviceCostRatio: 0.05,
  taxRatio: 0.01,
  alreadyReserved: [
    { year: 2022, month: 6, date: 12 },
    { year: 2022, month: 7, date: 1 },
    { year: 2022, month: 6, date: 14 },
    { year: 2022, month: 7, date: 6 },
    { year: 2022, month: 6, date: 26 },
  ],
};

const ReservationModal = ({ accommInfo = sampleData }) => (
  <CustomModal style={reservationModalStyle}>
    <PricePerDay priceData={accommInfo.price} />
    <ReservationInfos />
  </CustomModal>
);

export default ReservationModal;

const reservationModalStyle = css`
  width: calc(400px - 24px);
  height: 542px;
  left: 520px;
  top: 241px;
  border: 2px solid black;
  padding: 24px;
`;
