import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import HorizonLine from '../Shared/HorizonLine';
import MediumButton from '../Shared/MediumButton.js';
import SelectButton from '../Shared/SelectButton.js';

const Login = () => {
  const { setAuth } = useAuth();
  const [teacher, setTeacher] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //토스티파일 팝업함수
  const errorAlarm = (message) => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //인풋요소 유효성검사...util로 만들기!
    if (!(email.includes('@') && email.includes('.'))) {
      console.log('이메일 유효성검사: @랑 .이 없음');
      errorAlarm('유효하지 않은 이메일주소입니다.');
      return;
    } else if (password.length === 0) {
      errorAlarm('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(
        '로그인url',
        JSON.stringify({ email, password, teacher }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;

      setAuth({ email, password, teacher, accessToken });
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      console.log(err);
      alert('로그인실패');
    }
  };

  return (
    <Container>
      <SelectButton teacher={teacher} setTeacher={setTeacher} />
      <InputWrapperForm onSubmit={handleSubmit}>
        <input
          placeholder="이메일을 입력해 주세요."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="비밀번호를 입력해 주세요."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <MediumButton text={'로그인 하기'} color={'rgb(252, 60, 178)'} />
      </InputWrapperForm>
      <HorizonLine text={'회원이 아니신가요?'} />
      <MediumButton
        text={'회원가입 하기'}
        color={'#00c0d1'}
        onClick={() => {
          navigate('/signup');
        }}
      />
      <HorizonLine text={'소셜 로그인'} />
      <MediumButton text={'카카오톡 로그인'} color={'rgb(247,221,51)'} />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: var(--gold);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  font-family: 'Dongle', sans-serif;
`;

const InputWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > input {
    margin: 10px auto;
    padding: 5px 10px;
    width: 250px;
    border-radius: 10px;
  }
`;
