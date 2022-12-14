import styled from 'styled-components';

const SelectButton = ({ teacher, setTeacher }) => {
  return (
    <Container>
      <ButtonWrapper>
        <button
          onClick={() => {
            setTeacher(!teacher);
          }}
          className={teacher ? '' : 'underline'}
        >
          학생이에요
        </button>
        <button
          onClick={() => {
            setTeacher(!teacher);
          }}
          className={teacher ? 'underline' : ''}
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
    margin: 1.3rem 1rem;
    padding-bottom: 0.3rem;
    background-color: var(--gold);
    font-size: 1rem;
    cursor: pointer;
  }
  > button.underline {
    border-bottom: 3px white solid;
  }
`;
