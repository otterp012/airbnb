const koreanCurrencyConfig = {
  style: 'currency',
  currency: 'KRW',
};

const numToKOPrice = (num: number) => {
  return num.toLocaleString('ko-KR', koreanCurrencyConfig);
};

export { numToKOPrice };
