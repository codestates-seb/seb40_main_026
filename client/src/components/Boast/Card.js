import styled from 'styled-components';
import cardDefaultImg from '../../assets/images/cardDefaultImg.png';
import { tablet, mobile } from '../../styles/Responsive';
import { useNavigate } from 'react-router';

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

const PageBtn = styled.button`
  all: unset;
`;

const CardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 380px;
  height: 230px;
  border-radius: 2rem 2rem 0rem 0rem;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media ${mobile} {
    width: 500px;
  }
`;

const Word = styled.div`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;

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

function Card({
  classNameD,
  likeButton,
  title,
  nickName,
  likeCount,
  LikeButton,
  boastId,
  fileUrl,
  checkLike,
  LikeHandler,
  clickable,
  grade,
}) {
  const onErrorImg = (e) => {
    e.target.src = cardDefaultImg;
  };

  const navigate = useNavigate();
  const handleOnClick = (id) => {
    if (clickable) navigate(`/boast/${id}`);
  };
  return (
    <CardBox>
      <PageBtn onClick={() => handleOnClick(boastId)}>
        {fileUrl ? (
          <CardImg src={fileUrl} alt={'cardImg'} />
        ) : (
          <CardImg src={''} alt={'cardImg'} onError={onErrorImg} />
        )}
        <Word>{title}</Word>
      </PageBtn>

      <Word2 className={classNameD}>
        <div>
          {' '}
          {nickName}
          {grade}
        </div>
        {likeButton && (
          <LikeButton
            likeCount={likeCount}
            checkLike={checkLike}
            LikeHandler={() => LikeHandler(boastId)}
          />
        )}
      </Word2>
    </CardBox>
  );
}

Card.defaultProps = {
  likeButton: false,
  clickable: false,
};

export default Card;
