//import axios from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    //로그아웃api가 없어서 아래가 실행될지 모르겠음//원래는 백엔드 로그아웃api에서 리프레시토큰을 삭제해줘야함
    // try {
    //   const response = await axios('/logout', {
    //     withCredentials: true,
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return logout;
};

export default useLogout;
