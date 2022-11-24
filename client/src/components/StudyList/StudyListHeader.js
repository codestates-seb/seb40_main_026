import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import SortBtn from '../Shared/SortBtn';

const Container = styled.header`
  width: 70%;
  color: #ffa800;
  margin: auto;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; //수직 가운데 정렬
  margin-top: 2rem;
  font-size: 0.8rem;

  @media ${tablet} {
    /* padding: 1.5rem 0;
    flex-direction: column;
    align-items: center; */
  }
  @media ${mobile} {
    /* padding: 1.5rem 0;
    flex-direction: column;
    align-items: center; */
  }
`;
const StudyListHeader = () => {
  return (
    <>
      <Container>
        <h1>모여봐요</h1>
        <div>
          <SortBtn text={'온라인'} />
          <SortBtn text={'오프라인'} />
        </div>
      </Container>
    </>
  );
};
export default StudyListHeader;

// const HeaderBlock = styled.div`
//   border: 1px red solid;
//   display: flex;

//   @media ${tablet} {
//     padding: 30px 0px;
//     flex-direction: column;
//     align-items: center;
//   }
//   @media ${mobile} {
//     padding: 30px 0px;
//     flex-direction: column;
//     align-items: center;
//   }
//   > div {
//     display: flex;
//   }
// `;
