import { atom, selector } from 'recoil';

export const searchInfoState = atom({
  key: 'SearchInfoState',
  default: {
    checkIn: null,
    checkOut: null,
    minPrice: null,
    maxPrice: null,
    peopleNum: null,
  },
});

const cardsDataQuery = selector({
  key: 'CardsDataQuery',
  get: async ({ get }) => {
    const currentCardsState = get(searchInfoState);
    const response = await fetch(
      'https://test-234b2-default-rtdb.firebaseio.com/.json',
    );
    const cardsData = await response.json();
    return [cardsData, currentCardsState];
  },
});

// 원래 생각했던건 cards들을 구분하는 기준이 바뀌면
// cardsDataQuery를 실행해서 적절한 데이터만 뽑아내는 것이였는데,
// 백엔드가 없어 500여개의 데이터를 한번에 불러와야 하는 상황이라
// 아래 selector을 추가하면서 변경했습니다.

export const parsedCardsDataQuery = selector({
  key: 'ParsedCardsDataQuery',
  get: ({ get }) => {
    const [cardsData, currentCardsState] = get(cardsDataQuery);

    const currentCards = cardsData.filter((v) =>
      getCoordsIsVaild(v, currentCardsState),
    );

    // const hasPrice = priceInit(currentCards, currentCardsState);
    // console.log(hasPrice);
    return currentCards;
  },
});

const getCoordsIsVaild = (dataCardCoords, searchedCoords) => {
  if (
    dataCardCoords.lat >= searchedCoords.minLatitude &&
    dataCardCoords.lat <= searchedCoords.latitude
  ) {
    if (
      dataCardCoords.lng >= searchedCoords.minLongitude &&
      dataCardCoords.lng <= searchedCoords.longitude
    ) {
      return true;
    }
  }
  return false;
};

// const priceInit = (array, state) => {
//   state.minPrice
//     ? array
//     : array.map((v) => {
//         v.minPrice = 0;
//         v.maxPrice = 1_000_000;
//         return;
//       });
// };
