import styled from 'styled-components';

const LevelBox = styled.section`
  border: 1px solid black;
  border-radius: 30px;
  width: 500px;
  height: 600px;
`;

const QuestionBox = styled(LevelBox)``;

const AnswerBox = styled(LevelBox)``;

const Title = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  height: 80px;
  font-size: 30px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

function Member() {
  return (
    <>
      <LevelBox>
        <Title>레벨</Title>
        <Img src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></Img>
      </LevelBox>
      <QuestionBox>
        <Title>질문왕</Title>
      </QuestionBox>
      <AnswerBox>
        <Title>답변왕</Title>
      </AnswerBox>
    </>
  );
}

export default Member;
