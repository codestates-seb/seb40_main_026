import styled from 'styled-components';
import profile from '../../assets/images/profile.png';
import ranklogo1 from '../../assets/images/ranklogo1.png';
import ranklogo2 from '../../assets/images/ranklogo2.png';
import ranklogo3 from '../../assets/images/ranklogo3.png';
import { tablet, mobile } from '../../styles/Responsive';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';
import { Link } from 'react-router-dom';

const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 2fr;
  border: 1px solid white;
  border-radius: 30px;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  width: 100%;
  height: 40rem;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  border: 1px solid white;
  border-radius: 50px;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  background-color: #ff62be;
  color: white;
  width: 40%;
  height: 55%;
  font-size: 1.8rem;
  text-align: center;
  padding-top: 0.8rem;
  margin-top: 1rem;
  @media ${tablet} {
    font-size: 1.5rem;
    padding-top: 0.9rem;
  }
  @media ${mobile} {
    font-size: 1.3rem;
    padding-top: 0.8rem;
  }
`;

const TopBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  place-items: center;
  li:nth-child(1) {
    position: relative;
  }
  li:nth-child(2) {
    position: relative;
    bottom: 1rem;
  }
  li:nth-child(3) {
    position: relative;
    top: 1.3rem;
  }
`;

const TopMemberBox = styled.li`
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const CrownImg = styled.img`
  position: relative;
  width: 55px;
  left: 0.2rem;
  top: 0.7rem;
`;

const TopMemberImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const WordBox = styled.div`
  display: flex;
  font-size: 1.1rem;
  cursor: pointer;
`;

const BlockBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: end center;
  place-content: start center;
  padding: 1rem;
`;

const RankBlockL = styled.div`
  background-color: #ff62be;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 4rem;
`;
const RankBlockM = styled(RankBlockL)`
  background-color: #fe0095;
  height: 5rem;
`;
const RankBlockR = styled(RankBlockL)`
  background-color: #ff9fd7;
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
  margin-left: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 50%;
  div {
    margin: 0.9rem 0 0 0.5rem;
  }
`;
const BtmMemberImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

function QuestionBox({ token }) {
  const [list, setList] = useState([]);
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});

  useEffect(() => {
    async function getAllMembers() {
      const res = await axios.get(`${BASE_URL}members/ranking/question`);
      let data = res.data;
      setList(data.slice(3, 6));
      setFirst(data[0]);
      setSecond(data[1]);
      setThird(data[2]);
    }
    try {
      getAllMembers();
    } catch (err) {
      console.error(err);
    }
  }, []);
  const onErrorImg = (e) => {
    e.target.src = profile;
  };
  return (
    <Container>
      <TitleBox>
        <Title>질문왕</Title>
      </TitleBox>
      <TopBox>
        <TopMemberBox>
          <ImgBox>
            <CrownImg src={ranklogo2} alt="logo" />
            {second.fileUrl ? (
              <TopMemberImg src={second.fileUrl} alt={'cardImg'} />
            ) : (
              <TopMemberImg src={''} alt={'cardImg'} onError={onErrorImg} />
            )}
          </ImgBox>
          {token ? (
            <Link to={`/friendinfo/${second.memberId}`}>
              <WordBox>
                <span>
                  {second.memberGrade}
                  {second.nickname}
                </span>
              </WordBox>
            </Link>
          ) : (
            <WordBox
              onClick={() =>
                alert('로그인을 하면 친구의 페이지에 놀러 갈 수 있어요!')
              }
            >
              <span>
                {second.memberGrade}
                {second.nickname}
              </span>
            </WordBox>
          )}
        </TopMemberBox>
        <TopMemberBox>
          <ImgBox>
            <CrownImg src={ranklogo1} alt="logo" />
            {first.fileUrl ? (
              <TopMemberImg src={first.fileUrl} alt={'cardImg'} />
            ) : (
              <TopMemberImg src={''} alt={'cardImg'} onError={onErrorImg} />
            )}
          </ImgBox>
          {token ? (
            <Link to={`/friendinfo/${first.memberId}`}>
              <WordBox>
                <span>
                  {first.memberGrade}
                  {first.nickname}
                </span>
              </WordBox>
            </Link>
          ) : (
            <WordBox
              onClick={() =>
                alert('로그인을 하면 친구의 페이지에 놀러 갈 수 있어요!')
              }
            >
              <span>
                {first.memberGrade}
                {first.nickname}
              </span>
            </WordBox>
          )}
        </TopMemberBox>
        <TopMemberBox>
          <ImgBox>
            <CrownImg src={ranklogo3} alt="logo" />
            {third.fileUrl ? (
              <TopMemberImg src={third.fileUrl} alt={'cardImg'} />
            ) : (
              <TopMemberImg src={''} alt={'cardImg'} onError={onErrorImg} />
            )}
          </ImgBox>
          {token ? (
            <Link to={`/friendinfo/${third.memberId}`}>
              <WordBox>
                <span>
                  {third.memberGrade}
                  {third.nickname}
                </span>
              </WordBox>
            </Link>
          ) : (
            <WordBox
              onClick={() =>
                alert('로그인을 하면 친구의 페이지에 놀러 갈 수 있어요!')
              }
            >
              <span>
                {third.memberGrade}
                {third.nickname}
              </span>
            </WordBox>
          )}
        </TopMemberBox>
      </TopBox>
      <BlockBox>
        <RankBlockL></RankBlockL>
        <RankBlockM></RankBlockM>
        <RankBlockR></RankBlockR>
      </BlockBox>
      <BottomBox>
        {list &&
          list.slice(0, 3).map((item) => {
            return (
              <BtmMemberBox key={item.memberId}>
                {item.fileUrl ? (
                  <BtmMemberImg src={item.fileUrl} alt={'cardImg'} />
                ) : (
                  <BtmMemberImg src={''} alt={'cardImg'} onError={onErrorImg} />
                )}
                {token ? (
                  <Link to={`/friendinfo/${item.memberId}`}>
                    <WordBox>
                      <span>
                        {item.memberGrade}
                        {item.nickname}
                      </span>
                    </WordBox>
                  </Link>
                ) : (
                  <WordBox
                    onClick={() =>
                      alert('로그인을 하면 친구의 페이지에 놀러 갈 수 있어요!')
                    }
                  >
                    <span>
                      {item.memberGrade}
                      {item.nickname}
                    </span>
                  </WordBox>
                )}
              </BtmMemberBox>
            );
          })}
      </BottomBox>
    </Container>
  );
}

export default QuestionBox;
