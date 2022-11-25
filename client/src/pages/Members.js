import styled from 'styled-components';
import LevelBox from '../components/Members/LevelBox';
import QuestionBox from '../components/Members/QuestionBox';
import AnswerBox from '../components/Members/AnswerBox';
import { tablet, mobile } from '../styles/Responsive';
import TitleHeader from '../components/Shared/TitleHeader';

function Members() {
  const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 5rem;
    margin-top: 2rem;
  `;
  const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin: auto;
    width: 70%;

    @media ${tablet} {
      display: grid;
      grid-template-columns: 1fr;
    }
    @media ${mobile} {
      display: grid;
      grid-template-columns: 1fr;
    }
  `;

  const UserData = [
    {
      memberId: 1,
      path: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickname: '둘리',
      level: '🥚',
    },
    {
      memberId: 2,
      path: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickname: '또치',
      level: '🐥',
    },
    {
      memberId: 3,
      path: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickname: '길동',
      level: '🐓',
    },
  ];

  return (
    <Container>
      <TitleHeader title={'친구들'} />
      <ListBox>
        <LevelBox UserData={UserData} />
        <QuestionBox UserData={UserData} />
        <AnswerBox UserData={UserData} />
      </ListBox>
    </Container>
  );
}

export default Members;
