import { useState } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import axios from '../../api/axios';
import MediumButton from '../Shared/MediumButton';
import SelectButton from '../Shared/SelectButton';

const Signup = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  //토스티파일 팝업함수
  const errorAlarm = (message) => toast.error(message);
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const [hidePwd, setHidePwd] = useState(true);
  const [hideConfirmPwd, setHideConfirmPwd] = useState(true);

  const toggleHidePwd = () => {
    setHidePwd(!hidePwd);
  };
  const toggleHideConfirmPwd = () => {
    setHideConfirmPwd(!hideConfirmPwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //인풋요소 유효성검사...util로 만들기!
    if (nickname === '' || nickname.length > 15 || nickname.length < 4) {
      errorAlarm('닉네임은 4자 이상 15자 이하만 가능합니다');
      return;
    } else if (!(email.includes('@') && email.includes('.'))) {
      console.log('이메일 유효성검사: @랑 .이 없음');
      errorAlarm('유효하지 않은 이메일주소입니다.');
      return;
    } else if (!passwordRegex.test(password)) {
      errorAlarm(
        '비밀번호는 숫자+영문자+특수문자 포함 8자리 이상만 가능합니다.'
      );
      return;
    } else if (password.length === 0) {
      errorAlarm('비밀번호를 입력해주세요.');
      return;
    } else if (password.length > 20) {
      console.log('비밀번호 유효성검사: 20자 미만');
      errorAlarm(
        '비밀번호는 숫자, 영문자, 특수문자 포함 20자 미만만 가능합니다.'
      );
      return;
    } else if (password !== passwordConfirm) {
      errorAlarm('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('티처', teacher);
    console.log('닉네임', nickname);
    console.log('이메일', email);
    console.log('패스워드', password);

    return axios
      .post(`/members`, {
        teacher: teacher,
        nickname: nickname,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res) {
          console.log(res);
          axios
            .post(
              `/members/login`,
              { username: email, password: password },
              { headers: { 'Content-Type': 'application/json' } }
            )
            .then((res) => {
              console.log('확인');
              console.log(res.headers.authorization);
              let accessToken = res.headers.authorization;
              localStorage.setItem('accessToken', accessToken);
              setEmail('');
              setPassword('');
              navigate(`/`);
              window.location.reload();
            })
            .catch((error) => {
              if (error.response.status === 401) {
                errorAlarm('등록되지 않은 회원입니다');
                return;
              }
            });
        }
      })
      .catch((error) => {
        errorAlarm('에러');
        if (error.response) {
          console.log('에러', error);
          console.log('에러전체', error.response);
          console.log('에러데이터', error.response.data);
          console.log('에러상태', error.response.status);
          console.log('에러헤더', error.response.headers);
        } else if (error.request) {
          console.log('에러요청', error.request);
        } else {
          console.log('에러', error.message);
        }
      });
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <SelectButton teacher={teacher} setTeacher={setTeacher} />
      <InputWrapperForm onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type={'text'}
          placeholder="닉네임을 입력해 주세요."
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></input>
        <input
          autoComplete="off"
          type={'text'}
          placeholder="이메일을 입력해 주세요."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          autoComplete="off"
          type={hidePwd ? 'password' : 'text'}
          placeholder="비밀번호를 입력해 주세요."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <input
          autoComplete="off"
          type={hideConfirmPwd ? 'password' : 'text'}
          placeholder="비밀번호를 확인해 주세요."
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        ></input>
        <MediumButton
          text={'확인'}
          color={'rgb(252, 60, 178)'}
          className={'btn'}
        />
        <HidePwd type="button" onClick={toggleHidePwd}>
          {hidePwd ? <RiEyeCloseFill /> : <MdRemoveRedEye />}
        </HidePwd>
        <HideConfirmPwd type="button" onClick={toggleHideConfirmPwd}>
          {hideConfirmPwd ? <RiEyeCloseFill /> : <MdRemoveRedEye />}
        </HideConfirmPwd>
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
    padding: 1rem;
    border-bottom: 1px gray solid;
    color: white;
    font-size: 2rem;
  }
`;

const InputWrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > input {
    margin: 0.4rem auto;
    padding: 5px 10px;
    width: 13rem;
    border-radius: 10px;
  }
  .btn {
    width: 13rem;
    margin-top: 2rem;
  }
`;

const HidePwd = styled.button`
  width: 1rem;
  position: relative;
  bottom: 8.5rem;
  left: 15rem;
  background-color: transparent;
`;

const HideConfirmPwd = styled.button`
  width: 1rem;
  position: relative;
  bottom: 7.4rem;
  left: 15rem;
  background-color: transparent;
`;
