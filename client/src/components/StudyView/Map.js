import { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: '1000px',
        height: '500px',
      }}
    ></div>
  );
}
