import axiosInstance from '../utils/axiosInstance';

const postSignup = async (signupData) => {
  await axiosInstance
    .post('/signup', signupData)
    .then((data) => data)
    .catch((err) => err.response);
};

const postLogin = async (loginData) => {
  await axiosInstance
    .post('유알엘', loginData)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const postLogout = async () => {
  await axiosInstance
    .post('유알엘', '')
    .then((data) => data)
    .catch((err) => err.response);
};

export { postSignup, postLogin, postLogout };
