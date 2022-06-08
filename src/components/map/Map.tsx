import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
const { kakao } = window;

const Map = () => {
  const kakaoMapRef = useRef<HTMLInputElement>(null);
  const [coord, setCoord] = useState([37.365264512305174, 127.10676860117488]);
  //   console.log(process.env.REACT_APP_NEXT_PUBLIC_KAKAOMAP_APPKEY);
  useLayoutEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    // 초기 중심값
    const map = new kakao.maps.Map(kakaoMapRef.current, options);
    kakao.maps.event.addListener(map, 'dragend', () => {
      const { Ma, La } = map.getCenter();
      setCoord([Ma, La]);
    });
    // 드래그 이벤트 할때마다 중심좌표 새로 등록됨
  }, []);

  return (
    <MapContainer>
      <StyledMap
        id="map"
        ref={kakaoMapRef}
        style={{ width: '100%', height: '100%' }}
      />
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 50%;
  height: 100%;
  background: green;
`;

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;
export default Map;
