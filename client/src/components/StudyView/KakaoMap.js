/* global kakao */

import React, { useEffect, useRef } from 'react';

export default function KakaoMap(props) {
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
  };

  useEffect(() => {
    new kakao.maps.Map(container.current, options);
  }, []);

  return (
    <div
      id="container"
      ref={container}
      style={{ width: '500px', height: '500px' }}
    />
  );
}
