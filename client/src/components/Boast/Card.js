import styled from 'styled-components';
import LikeButton from '../Shared/LikeButton';
import lineimg from '../../assets/images/lineimg.png';
import { tablet, desktop } from '../../styles/Responsive';

function Card() {
  const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    width: 100%;
    @media ${desktop} {
      display: flex;
      margin: 40px;
    }
    @media ${tablet} {
      display: flex;
      flex-wrap: wrap;
      padding: 0px;
    }
  `;
  const CardBox = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #ffc149;
    border-radius: 20px;
    width: 400px;
    height: 340px;
    margin: 50px 50px 50px 100px;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 12%);

    @media ${desktop} {
      display: flex;
      width: 500px;
      height: 440px;
      margin: 30px;
    }
    @media ${tablet} {
      display: flex;
      width: 600px;
      height: 540px;
      margin: 30px;
    }
  `;

  const CardImg = styled.img`
    width: 100%;
    height: 65%;
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 2px 5px rgb(0 0 0 / 12%);
  `;

  const Word = styled.div`
    margin-left: 10px;
    font-size: 30px;
    color: white;
    font-weight: bold;
    @media ${tablet} {
      font-size: 40px;
    }
  `;

  const Word2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
    margin: 17px 10px 0px 10px;
    color: white;
    font-weight: 16px;
    font-size: 20px;
    @media ${tablet} {
      font-size: 28px;
      margin-top: 70px;
    }
  `;

  const LikeBox = styled.div`
    display: flex;
  `;

  const LineImg = styled.img`
    position: relative;
    top: 450px;
    width: 1700px;
    @media ${desktop} {
      display: none;
    }
    @media ${tablet} {
      display: none;
    }
  `;

  const obj = [
    {
      boastId: 1,
      title: 'popular test 1 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:46.871873',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 1,
    },
    {
      boastId: 3,
      title: 'popular test 3 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:51.425265',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 1,
    },
    {
      boastId: 5,
      title: 'popular test 5 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:56.920637',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 1,
    },
    {
      boastId: 7,
      title: 'popular test 7 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:10:04.384021',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 0,
    },
    {
      boastId: 6,
      title: 'popular test 6 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:10:01.038183',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 0,
    },
    {
      boastId: 5,
      title: 'popular test 5 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:56.920637',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 1,
    },
    {
      boastId: 4,
      title: 'popular test 4 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:54.249867',
      //  boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 0,
    },
    {
      boastId: 3,
      title: 'popular test 3 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:51.425265',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 1,
    },
    {
      boastId: 2,
      title: 'popular test 2 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:49.206095',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 0,
    },
    {
      boastId: 1,
      title: 'popular test 1 ',
      src: 'https://archivetip.com/wp-content/uploads/2021/08/%EC%A1%B8%EB%A6%B0-%ED%91%9C%EC%A0%95.jpg',
      nickName: '둘리',
      // content: 'boast mapping Test !!',
      boardCreatedAt: '2022-11-16T14:09:46.871873',
      // boardModifiedAt: null,
      // viewCount: 0,
      likeCount: 1,
    },
  ];

  return (
    <Container>
      <LineImg src={lineimg} alt="line" />
      {obj.map((item, id) => {
        return (
          <CardBox key={id}>
            <CardImg src={item.src} alt={item.alt} />
            <Word>{item.title}</Word>
            <Word2>
              <div>{item.nickName}</div>
              <LikeBox>
                <LikeButton likeCount={item.likeCount} />
              </LikeBox>
            </Word2>
          </CardBox>
        );
      })}
    </Container>
  );
}

export default Card;
