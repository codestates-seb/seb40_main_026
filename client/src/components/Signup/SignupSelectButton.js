import styled from 'styled-components';

const SignupSelectButton = ({ student, setStudent }) => {
  return (
    <Container>
      <SelectButton>
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
      </SelectButton>
    </Container>
  );
};

export default SignupSelectButton;

const Container = styled.div``;

const SelectButton = styled.div`
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
