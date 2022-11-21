import { Link } from 'react-scroll';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import MediumButton from '../Shared/MediumButton';
import SortBtn from '../Shared/SortBtn';
import PostBtn from '../Shared/PostBtn';

const StudyViewButtons = () => {
  const buttonName = [
    '클래스소개',
    '수업기간',
    '수업시간',
    '수업비용',
    '추천대상',
    '수업문의',
    '수업장소',
  ];
  return (
    <Container>
      <Buttons>
        {buttonName.map((ele, index) => (
          <Link to={index} smooth={true} key={ele}>
            <SortBtn text={ele} className="btn" />
          </Link>
        ))}
      </Buttons>
      <PostBtn text={'수강신청 하기'} className="registerBtn" />
    </Container>
  );
};

export default StudyViewButtons;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${tablet} {
    margin: 20px 0;
    justify-content: center;
    align-items: center;
  }
  @media ${mobile} {
    margin: 20px 0;
    justify-content: center;
    align-items: center;
  }

  > .registerBtn {
    align-items: flex-end;

    margin-right: 0;
    @media ${tablet} {
      margin: 1rem 0;
    }
    @media ${mobile} {
      margin: 1rem 0;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${tablet} {
    display: flex;
    justify-content: center;
  }
  @media ${mobile} {
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 5rem;
    margin-right: 0.3rem;
  }
`;
