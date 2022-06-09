export const kakaoEventCallback = (
  Map: unknown,
  setState: React.Dispatch<React.SetStateAction<Record<string, unknown>>>,
) => {
  const { ha, qa, oa, pa } = Map.getBounds();
  const newCurrentBounds = {
    minLatitude: qa,
    latitude: pa,
    minLongitude: ha,
    longitude: oa,
  };
  setState(newCurrentBounds);
};

const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API;

export const kakaoUrl = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}`;
