import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import proj4 from 'proj4';

const Map = () => {
  useEffect(() => {
    const map = initMap();
    activateMap(map);
    makeMarkers(map);
    transTest();
  }, []);

  const initMap = () => {
    const container = document.getElementById('map');
    const defaultLat = 37.524981434297715;
    const defaultLng = 126.96521838945827;
    const options = { center: new kakao.maps.LatLng(defaultLat, defaultLng), level: 5 };
    const map = new kakao.maps.Map(container, options);
    const zoomController = new kakao.maps.ZoomControl();
    map.addControl(zoomController, kakao.maps.ControlPosition.RIGTH);
    return map;
  };

  const activateMap = (map) => {
    kakao.maps.event.addListener(map, 'dragend', () => console.log(map.getBounds()));
    kakao.maps.event.addListener(map, 'zoom_changed', () => console.log(map.getBounds()));
  };

  const makeMarkers = (map) => {
    //숙소 정보를 가지고 쭉 렌더하면 됨
    new kakao.maps.InfoWindow({
      map: map,
      position: new kakao.maps.LatLng(37.524981434297715, 126.96521838945827),
      content: `<div style="padding:5px">${'가격정보'}</div>`,
    });
  };

  const transTest = () => {
    const wtmX = 196925.813583769;
    const wtmY = 447282.961800335;

    const eps2097 =
      '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs';
    const wgs84 = '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees';

    const eps2097p = proj4(eps2097, wgs84, [wtmX, wtmY]);
    console.log(eps2097p);
  };

  return (
    <Container width='50vw' height='100vh' id='map'>
      <DragToggle onClick={() => map.setDraggable(!map.getDraggable())}>
        드래그 기능 토글
      </DragToggle>
    </Container>
  );
};

export default Map;

const DragToggle = styled.button`
  width: 70px;
  height: 30px;
  position: absolute;
  top: 30px;
  left: calc(50% - 15px);
  z-index: 10;
  background: red;
`;
