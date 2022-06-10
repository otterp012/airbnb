/* global kakao */

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  searchInfoState,
  parsedCardsDataQuery,
} from '../../store/searchPageStore/searchPageStore';
import { kakaoEventCallback, kakaoUrl, initialCoordState } from './mapUtils';

let init = true;
const LazyMap = () => {
  const [searchInfo, setSearchInfo] = useRecoilState(searchInfoState);
  // const cards = useRecoilValue(parsedCardsDataQuery);
  const [currentCoord, setCurrentCoord] = useState(initialCoordState);
  const kakaoMapContainer = useRef<HTMLDivElement>(null);
  const kakaoMap = useRef(null);

  useEffect(() => {
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
          level: 5,
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

  // useEffect(() => {
  //   // if (init) {
  //   //   init = false;
  //   //   return;
  //   // }
  //   console.log(1);
  //   const timer = setTimeout(() => {
  //     setSearchInfo((prev) => {
  //       return { ...prev, currentCoord };
  //     });
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [currentCoord]);

  // useEffect(() => {
  //   const overlayInfos = cards.map(({ price, lat, lng }) => {
  //     return {
  //       price,
  //       lat,
  //       lng,
  //     };
  //   });
  //   overlayInfos.forEach((el: { price: number; lat: number; lng: number }) => {
  //     const position = new kakao.maps.LatLng(el.lat, el.lng);
  //     const marker = new kakao.maps.Marker({
  //       position,
  //     });

  //     const content = `<span class="kakao_overlay">${el.price}</span>`;
  //     new kakao.maps.CustomOverlay({
  //       map: kakaoMap.current,
  //       position,
  //       content,
  //     });
  //     marker.setMap();
  //   });
  // }, [currentCoord]);

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

const StyledSapn = styled.span`
  background: #fff;
`;
export default LazyMap;
