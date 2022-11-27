import styled from 'styled-components';
import LikeButton from '../Shared/LikeButton';
import { tablet, mobile } from '../../styles/Responsive';
import PostBtn from '../Shared/PostBtn';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function Card({
  className,
  classNameA,
  classNameB,
  classNameC,
  classNameD,
  likeButton,
  list,
}) {
  console.log(list);
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/boasts/${id}`);
  };

  const Container = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    width: 70%;
  `;

  const TopLogo = styled.div`
    width: 10%;
    height: 3.5rem;
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    text-align: center;
    padding-top: 0.7rem;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #d8d4cc;

    @media ${tablet} {
      font-size: 1.1rem;
      padding-top: 0.2rem;
      height: 2rem;
    }

    @media ${mobile} {
      display: none;
    }
  `;

  const BtnBox = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0rem 0.4rem 3rem;
  `;

  const TopListBox = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    box-shadow: 0 0.1rem 0.4rem rgb(0 0 0 / 12%);
    background: #f7f7f7;
    border-radius: 0rem 2rem 2rem 2rem;
    grid-gap: 2rem;
    padding: 2rem;
    width: 100%;

    @media ${tablet} {
      grid-gap: 0rem;
    }

    @media ${mobile} {
      grid-template-columns: 1fr;
      background: white;
      box-shadow: none;
      padding: 2.3rem 0 0 0;
    }

    li {
      color: white;
      background-color: #ffc149;

      @media ${mobile} {
        width: 100%;
      }
      @media ${tablet} {
        width: 80%;
      }
    }
  `;

  const ListBox = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    margin-top: 3rem;
    width: 100%;
    @media ${tablet} {
    }
    @media ${mobile} {
      grid-template-columns: 1fr;
      padding: 0;
      margin-top: 1.5rem;
    }

    li {
      background-color: white;
      color: black;
      margin: 1.5rem;

      @media ${mobile} {
        width: 100%;
      }
      @media ${tablet} {
        width: 80%;
      }
    }
  `;

  const CardBox = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 2rem;
    box-shadow: 0 0.1rem 0.4rem rgb(0 0 0 / 12%);
    transform: scale(1);
    transition: all 0.5s;
    :hover {
      transform: scale(1.1);
    }

    @media ${mobile} {
      width: 100%;
    }
  `;

  const CardImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 2rem 2rem 0rem 0rem;
    box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  `;

  const Word = styled.div`
    margin-left: 0.5rem;
    font-weight: bold;
    font-size: 1.6rem;

    @media ${mobile} {
      font-size: 2.3rem;
    }

    @media ${tablet} {
      font-size: 1.3rem;
    }
  `;

  const Word2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 0.5rem 0.2rem 0;
    padding: 0.5rem;
    font-size: 1.1rem;
    color: gray;
    @media ${mobile} {
      font-size: 1.4rem;
    }
    @media ${tablet} {
      font-size: 1rem;
    }

    button {
      margin-bottom: 0.3rem;
    }
  `;

  const listData = [
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

  const listData2 = [
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
  ];

  return (
    <Container>
      <BtnBox Link to="/boastCreate">
        <PostBtn className={classNameC} text="자랑하기" />
      </BtnBox>
      <TopLogo className={classNameB}>Top 3</TopLogo>
      <TopListBox className={className}>
        {listData2.map((item) => {
          return (
            <CardBox key={item.boastId}>
              <Link to="/boast/id" onClick={() => handleOnClick(list.memberId)}>
                <CardImg src={item.src} alt={item.alt} />
                <Word>{item.title}</Word>
              </Link>
              <Word2 className={classNameD}>
                <div>{item.nickName}</div>
                {likeButton && <LikeButton likeCount={item.likeCount} />}
              </Word2>
            </CardBox>
          );
        })}
      </TopListBox>
      <ListBox className={classNameA}>
        {listData.map((item) => {
          return (
            <CardBox key={item.memberId}>
              <Link to="/boast/id" onClick={() => handleOnClick(list.memberId)}>
                <CardImg src={item.src} alt={item.alt} />
                <Word>{item.title}</Word>
              </Link>
              <Word2 className={classNameD}>
                <div>{item.nickName}</div>
                {likeButton && <LikeButton likeCount={item.likeCount} />}
              </Word2>
            </CardBox>
          );
        })}
      </ListBox>
    </Container>
  );
}

Card.defaultProps = {
  likeButton: false,
};

export default Card;
