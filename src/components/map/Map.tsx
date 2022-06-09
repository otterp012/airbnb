/* global kakao */

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { coordState } from '../../store/searchPageStore/searchPageStore';
import { kakaoEventCallback, kakaoUrl } from './mapUtils';

const Map = () => {
  const [coord, setCoord] = useRecoilState(coordState);
  const [currentCoord, setCurrentCoord] = useState({
    minLatitude: 37.44025954159828,
    minLongitude: 126.97649607139127,
    latitude: 37.50649849229814,
    longitude: 127.03655373306772,
  });

  const kakaoMapContainer = useRef<HTMLDivElement>(null);
  const kakaoMap = useRef(null);

  useLayoutEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = `${kakaoUrl}&autoload=false`;
    scriptTag.type = 'text/javascript';
    document.head.appendChild(scriptTag);

    scriptTag.onload = () => {
      window.kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(
          currentCoord.latitude,
          currentCoord.longitude,
        );
        const options = {
          center,
          level: 6,
        };
        const map = new kakao.maps.Map(kakaoMapContainer.current, options);

        kakaoMap.current = map;
        window.kakao.maps.event.addListener(kakaoMap.current, 'dragend', () => {
          kakaoEventCallback(kakaoMap.current, setCurrentCoord);
        });
        window.kakao.maps.event.addListener(
          kakaoMap.current,
          'zoom_changed',
          () => {
            kakaoEventCallback(kakaoMap.current, setCurrentCoord);
          },
        );
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoord(currentCoord);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentCoord]);

  return (
    <MapContainer>
      <StyledMap
        id="map"
        ref={kakaoMapContainer}
        style={{ width: '100%', height: '100%' }}
      />
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
