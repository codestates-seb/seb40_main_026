import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignupSelectButton from './SignupSelectButton';

const Signup = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const data = {
    student: student,
    displayName: displayName,
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (password !== passwordConfirm) {
      return;
    }

    return axios
      .post(`url`, data)
      .then((res) => {
        if (res) {
          navigate('/login');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <SignupSelectButton student={student} setStudent={setStudent} />
      <InputWrapper onSubmit={handleSubmit}>
        <input
          placeholder="닉네임을 입력해 주세요."
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        ></input>
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
        <input
          placeholder="비밀번호를 확인해 주세요."
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        ></input>
      </InputWrapper>
      <ButtonWrapper>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          확인
        </button>
      </ButtonWrapper>
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
  font-family: 'Dongle', sans-serif;
  > h1 {
    font-weight: 300;
    text-align: center;
    padding: 10px 20px;
    border-bottom: 1px gray solid;
    color: white;
    font-size: 50px;
  }
`;

const InputWrapper = styled.form`
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

const ButtonWrapper = styled.div`
  display: flex;
  margin: 30px 50px;
  > button {
    margin: auto;
    width: 200px;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
  }
`;
