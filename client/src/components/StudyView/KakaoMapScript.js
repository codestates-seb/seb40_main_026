const { kakao } = window;

export default function KakaoMapScript(mapLocation) {
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(37.4967, 127.0248),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch(mapLocation, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content:
          '<div style="width:150px;text-align:center;padding:6px 0;">수업 장소</div>',
      });
      infowindow.open(map, marker);

      map.setCenter(coords);
    }
  });
}
