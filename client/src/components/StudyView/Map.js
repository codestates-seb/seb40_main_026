import { useEffect } from 'react';
import KakaoMapScript from './KakaoMapScript';

export default function Map({ mapLocation, className }) {
  useEffect(() => {
    KakaoMapScript(mapLocation);
  }, [mapLocation]);

  return (
    <div
      id="myMap"
      style={{
        width: '900px',
        height: '500px',
      }}
      className={className}
    ></div>
  );
}
