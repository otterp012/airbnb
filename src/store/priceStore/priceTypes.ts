import { Dispatch } from 'react';

export type PriceStateType = {
  minPrice: number | null;
  maxPrice: number | null;
};

export type PriceDispatchType = Dispatch<React.SetStateAction<PriceStateType>>;
