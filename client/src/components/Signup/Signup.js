import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import MediumButton from '../Shared/MediumButton';
import SelectButton from '../Shared/SelectButton';

const Signup = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const data = {
    teacher: teacher,
    displayName: displayName,
    email: email,
    password: password,
  };
  //토스티파일 팝업함수
  const errorAlarm = (message) => toast.error(message);

  const handleSubmit = (e) => {
    e.preventDefault();
    //인풋요소 유효성검사...util로 만들기!
    if (
      displayName === '' ||
      displayName.length > 15 ||
      displayName.length < 4
    ) {
      errorAlarm('닉네임은 4자 이상 15자 이하만 가능합니다');
      return;
    } else if (!(email.includes('@') && email.includes('.'))) {
      console.log('이메일 유효성검사: @랑 .이 없음');
      errorAlarm('유효하지 않은 이메일주소입니다.');
      return;
    } else if (password.length === 0) {
      errorAlarm('비밀번호를 입력해주세요.');
      return;
    } else if (password.length > 20) {
      console.log('비밀번호 유효성검사: 20자 미만');
      errorAlarm('비밀번호는 20자 미만만 가능합니다.');
      return;
    } else if (password !== passwordConfirm) {
      errorAlarm('비밀번호가 일치하지 않습니다.');
      return;
    }

    return axios
      .post(`url`, data)
      .then((res) => {
        if (res) {
          navigate('/login');
        }
      })
      .catch((error) => {
        errorAlarm('에러');
        console.log(error);
      });
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <SelectButton teacher={teacher} setTeacher={setTeacher} />
      <InputWrapperForm onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder="닉네임을 입력해 주세요."
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        ></input>
        <input
          type={'text'}
          placeholder="이메일을 입력해 주세요."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type={'password'}
          placeholder="비밀번호를 입력해 주세요."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type={'password'}
          placeholder="비밀번호를 확인해 주세요."
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        ></input>
        <MediumButton text={'확인'} color={'rgb(252, 60, 178)'} />
      </InputWrapperForm>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: var(--gold);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  > h1 {
    font-weight: 300;
    text-align: center;
    padding: 10px 20px;
    border-bottom: 1px gray solid;
    color: white;
    font-size: 50px;
  }
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
