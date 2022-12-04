import styled from 'styled-components';
import cardDefaultImg from '../../assets/images/cardDefaultImg.png';
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
  background-color: #ffc149;
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
`;

const BlockBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: end center;
  place-content: start center;
  padding: 1rem;
`;

const RankBlockL = styled.div`
  background-color: #ffc149;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 4rem;
`;
const RankBlockM = styled(RankBlockL)`
  background-color: #ffa800;
  height: 5rem;
`;
const RankBlockR = styled(RankBlockL)`
  background-color: #ffd583;
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

function LevelBox() {
  const [list, setList] = useState([]);

  const onErrorImg = (e) => {
    e.target.src = cardDefaultImg;
  };

  useEffect(() => {
    async function getAllMembers() {
      const res = await axios.get(`${BASE_URL}members/ranking/level`);
      let data = res.data;
      setList(data.slice(0, 3));
    }
    try {
      getAllMembers();
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <Container>
      <TitleBox>
        <Title>레벨</Title>
      </TitleBox>
      <TopBox>
        <TopMemberBox>
          <ImgBox>
            <CrownImg src={ranklogo2} alt="logo" />
            <TopMemberImg
              src={
                'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/16b98d3e3d30e.jpg'
              }
              alt={'cardImg'}
            ></TopMemberImg>
          </ImgBox>
          <WordBox>
            <span>🐓</span>
            <span>나는천재</span>
          </WordBox>
        </TopMemberBox>
        <TopMemberBox>
          <ImgBox>
            <CrownImg src={ranklogo1} alt="logo" />
            <TopMemberImg
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/280px-Golde33443.jpg'
              }
              alt={'cardImg'}
            ></TopMemberImg>
          </ImgBox>
          <WordBox>
            <span>🐓</span>
            <span>코딩왕</span>
          </WordBox>
        </TopMemberBox>
        <TopMemberBox>
          <ImgBox>
            <CrownImg src={ranklogo3} alt="logo" />
            <TopMemberImg
              src={
                'https://i.pinimg.com/564x/4e/4d/a1/4e4da156c3bfe41eb1de21df964a82a2.jpg'
              }
              alt={'cardImg'}
            ></TopMemberImg>
          </ImgBox>
          <WordBox>
            <span>🐓</span>
            <span>쵸코렛</span>
          </WordBox>
        </TopMemberBox>
      </TopBox>
      <BlockBox>
        <RankBlockL></RankBlockL>
        <RankBlockM></RankBlockM>
        <RankBlockR></RankBlockR>
      </BlockBox>
      <BottomBox>
        {list.map((item) => {
          return (
            <BtmMemberBox key={item.memberId}>
              {item.fileUrl ? (
                <BtmMemberImg src={item.fileUrl} alt={'cardImg'} />
              ) : (
                <BtmMemberImg src={''} alt={'cardImg'} onError={onErrorImg} />
              )}
              <Link to={`/friendinfo/${item.memberId}`}>
                <WordBox>
                  <span>{item.level}</span>
                  <span>{item.memberGrade}</span>
                  <span>{item.nickname}</span>
                </WordBox>
              </Link>
            </BtmMemberBox>
          );
        })}
      </BottomBox>
    </Container>
  );
}

export default LevelBox;
