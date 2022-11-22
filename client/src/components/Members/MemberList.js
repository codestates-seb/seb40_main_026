import styled from 'styled-components';

const LevelBox = styled.section`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 2fr;
  border: 1px solid white;
  border-radius: 30px;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  width: 90%;
  height: 40rem;
`;

const QuestionBox = styled(LevelBox)``;

const AnswerBox = styled(LevelBox)``;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  border: 1px solid white;
  border-radius: 50px;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  width: 10rem;
  height: 3.5rem;
  font-size: 2rem;
  text-align: center;
  padding-top: 0.4rem;
`;

const TopBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`;

const TopMemberBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

const TopMemberImg = styled.img`
  width: 100%;
  height: 40%;
  border-radius: 50%;
`;

const WordBox = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
`;

const BlockBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: end center;
  place-content: start center;
`;

const RankBlockL = styled.div`
  background-color: #ffc149;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 4rem;
  border: 0.2rem solid orange;
`;
const RankBlockM = styled(RankBlockL)`
  height: 5rem;
`;
const RankBlockR = styled(RankBlockL)`
  height: 3rem;
`;

const BottomBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BtmMemberBox = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  height: 50%;

  div {
    margin: 0.9rem 0 0 0.5rem;
  }
`;
const BtmMemberImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

function MemberList() {
  return (
    <>
      <LevelBox>
        <TitleBox>
          <Title>레벨</Title>
        </TitleBox>
        <TopBox>
          <TopMemberBox>
            <TopMemberImg src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></TopMemberImg>
            <WordBox>
              <span>🐥</span>
              <span>둘리</span>
            </WordBox>
          </TopMemberBox>
          <TopMemberBox>
            <TopMemberImg src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></TopMemberImg>
            <WordBox>
              <span>🐥</span>
              <span>둘리</span>
            </WordBox>
          </TopMemberBox>
          <TopMemberBox>
            <TopMemberImg src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></TopMemberImg>
            <WordBox>
              <span>🐥</span>
              <span>둘리</span>
            </WordBox>
          </TopMemberBox>
        </TopBox>
        <BlockBox>
          <RankBlockL></RankBlockL>
          <RankBlockM></RankBlockM>
          <RankBlockR></RankBlockR>
        </BlockBox>
        <BottomBox>
          <BtmMemberBox>
            <BtmMemberImg src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></BtmMemberImg>
            <WordBox>
              <span>🐥</span>
              <span>둘리</span>
            </WordBox>
          </BtmMemberBox>
          <BtmMemberBox>
            <BtmMemberImg src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></BtmMemberImg>
            <WordBox>
              <span>🐥</span>
              <span>둘리</span>
            </WordBox>
          </BtmMemberBox>
          <BtmMemberBox>
            <BtmMemberImg src="https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg"></BtmMemberImg>
            <WordBox>
              <span>🐥</span>
              <span>둘리</span>
            </WordBox>
          </BtmMemberBox>
        </BottomBox>
      </LevelBox>
      <QuestionBox>
        <TitleBox>
          <Title>질문왕</Title>
        </TitleBox>
        <TopBox></TopBox>
      </QuestionBox>
      <AnswerBox>
        <TitleBox>
          <Title>답변왕</Title>
        </TitleBox>
        <TopBox></TopBox>
      </AnswerBox>
    </>
  );
}

export default MemberList;
