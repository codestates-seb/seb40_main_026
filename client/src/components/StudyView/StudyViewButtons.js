import { Link } from 'react-scroll';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import MediumButton from '../Shared/MediumButton';

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
            <MediumButton text={ele} className="btn" />
          </Link>
        ))}
      </Buttons>
    </Container>
  );
};

export default StudyViewButtons;

const Container = styled.div``;

const Buttons = styled.div`
  width: 100%;
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
    width: 80px;
    margin: 10px;
  }
`;
