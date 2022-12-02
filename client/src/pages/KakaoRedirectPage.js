// //import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// const { Kakao } = window;

const KakaoRedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const REST_API_KEY = 'e1fa75518249c1148aaa8523ccdecdbf';
  const REDIRECT_URI = 'http://localhost:3000/kakaoredirect';
  const KAKAO_CODE = window.location.search.split('=')[1];

  //   const loginWithKakao = () => {
  //     Kakao.Auth.authorize({
  //       redirectUri: 'http://localhost:3000/kakaoredirect',
  //     });
  //   };

  //   const uri = window.location.href;

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('데이터', data);
        if (data.access_token) {
          localStorage.setItem('accessToken', data.access_token);
          alert('로그인 성공');
          navigate('/');
          window.location.reload();
        } else {
          navigate('/');
        }
      });
  };
  useEffect(() => {
    getKakaoToken();
  }, []);

  //   });
  return (
    <div>
      {/* <div>{uri}</div> */}
      {/* <div>카카오코드{KAKAO_CODE}</div> */}
    </div>
  );
};
export default KakaoRedirectPage;
