//로그인, 회원가입 화면에서 학생, 선생님을 고르는 버튼

import styled from 'styled-components';

const SelectButton = ({ student, setStudent }) => {
  return (
    <Container>
      <ButtonWrapper>
        <button
          onClick={() => {
            setStudent(!student);
          }}
          className={student ? 'underline' : ''}
        >
          학생이에요
        </button>
        <button
          onClick={() => {
            setStudent(!student);
          }}
          className={student ? '' : 'underline'}
        >
          선생님이에요
        </button>
      </ButtonWrapper>
    </Container>
  );
};

export default SelectButton;

const Container = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > button {
    margin: 20px 30px;
    background-color: var(--gold);
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    cursor: pointer;
  }
  > button.underline {
    border-bottom: 3px white solid;
  }
`;
