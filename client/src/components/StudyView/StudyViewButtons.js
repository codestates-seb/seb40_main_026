import { useParams } from 'react-router-dom';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import axios from '../../api/axios';
import { mobile, tablet } from '../../styles/Responsive';
import PostBtn from '../Shared/PostBtn';
import SortBtn from '../Shared/SortBtn';

const StudyViewButtons = () => {
  let { id } = useParams();
  console.log(id);
  const buttonName = [
    '클래스소개',
    '수업시간',
    '수업비용',
    '추천대상',
    '수업문의',
    '수업장소',
  ];
  const handleRegisterClick = () => {
    alert('수강신청 완료되었습니다');
    axios
      .post(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/studies/${id}/recruitment`,
        {
          'study-id': '{ id }',
        }
      )
      .then((res) => console.log(res.data.count))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Buttons>
        {buttonName.map((ele, index) => (
          <Link to={index} smooth={true} key={ele}>
            <SortBtn text={ele} className="btn" />
          </Link>
        ))}
      </Buttons>
      <PostBtn
        text={'참여하기'}
        className="registerBtn"
        onClick={handleRegisterClick}
      />
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
  }
  @media ${mobile} {
    margin: 20px 0;
  }

  > .registerBtn {
    display: flex;
    justify-content: center;
    padding: 0.6rem;

    margin-right: 0;
    @media ${tablet} {
      margin: 1rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media ${mobile} {
      margin: 1rem auto;
      display: flex;
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
    width: 7rem;
    margin-right: 0.3rem;
    cursor: pointer;
    &:hover {
      background-color: #ffc149;
    }
  }
`;
