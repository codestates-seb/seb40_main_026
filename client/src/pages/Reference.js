import styled from 'styled-components';
import Card from '../components/Boast/Card';
import { tablet, mobile } from '../styles/Responsive';
import TitleHeader from '../components/Shared/TitleHeader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  margin-top: 2rem;
  @media ${tablet} {
    margin-left: -30px;
  }
  @media ${mobile} {
    margin-left: -80px;
  }

  .listbox {
    grid-gap: 2rem;
    > li {
      background-color: #ffc149;
      color: white;
      margin-top: 0rem;
      margin: 0rem;

      @media ${mobile} {
        display: flex;
        width: 600px;
        height: 540px;
        margin: 30px;
      }
      @media ${tablet} {
        display: flex;
        width: 500px;
        height: 440px;
        margin: 30px;
      }
    }
  }

  .TopLogo {
    display: none;
  }
  .Btn {
    display: none;
  }

  .Word {
    margin-bottom: 0.5rem;
  }
`;

function Reference() {
  return (
    <>
      <Container>
        <TitleHeader title={'배울래요'} />
        <Card
          classNameA="listbox"
          classNameB="TopLogo"
          classNameC="Btn"
          classNameD="Word"
        />
      </Container>
    </>
  );
}

export default Reference;
