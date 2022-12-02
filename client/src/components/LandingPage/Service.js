import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Fade from 'react-reveal/Fade';
const Carousel = () => {
  const DummyData1 = [
    {
      Id: 1,
      Title: '#궁금해요',
      Content:
        '평소 코딩을 하면서 궁금했던것이나, 모르는것들을 질문하고 답변하면서 리워드를 쌓을 수 있어요!',
      className: 'Yellow',
      ImgURL:
        'https://user-images.githubusercontent.com/107850055/204770716-441db833-8a4d-4934-95cb-465d3c50b3c1.png',
      link: '/questions',
    },
    {
      Id: 2,
      Title: '#모여봐요',
      Content:
        '처음하는 코딩 혼자하기 힘들다면? 모여봐요에서 친구들과 함께 해봐요!',
      className: 'Pink',
      ImgURL:
        'https://user-images.githubusercontent.com/107850055/204770746-cf9ebe65-e937-431e-bb33-307cbe97578a.png',
      link: '/study',
    },
    {
      Id: 3,
      Title: '#방명록 ',
      Content:
        '친해지고 싶은 친구의 마이페이지를 방문해 안부글을 남겨보세요!   ',
      className: 'Blue',
      ImgURL:
        'https://user-images.githubusercontent.com/107850055/204770737-c536ce97-6726-4ee3-b6ac-26fe4d55264a.png',
      link: '/questions',
    },
  ];
  const DummyData2 = [
    {
      Id: 4,
      Title: '#자랑하기',
      Content:
        '내가 만들었던 작품이나, 레벨을 공유하면서 의사소통을 할 수 있어요!',
      className: 'Blue',
      ImgURL:
        'https://user-images.githubusercontent.com/107850055/204770741-056b1f90-b471-452f-b57d-387459494bb3.png',
      link: '/boast',
    },

    {
      Id: 5,
      Title: '#친구들',
      Content: '친구들의 랭킹을 확인 하고, 마이페이지에 방문 할 수 있어요!',
      className: 'Yellow',
      ImgURL:
        'https://user-images.githubusercontent.com/107850055/204770750-430f6daf-2dff-4312-97d8-d1527dbae555.png',
      link: '/members',
    },
    {
      Id: 6,
      Title: '#배울래요',
      Content: '어린이  눈높이에 맞춘 코딩 학습자료를 여기서 확인해보세요!',
      className: 'Pink',
      ImgURL:
        'https://user-images.githubusercontent.com/107850055/204770746-cf9ebe65-e937-431e-bb33-307cbe97578a.png',
      link: '/contents',
    },
  ];
  return (
    <>
      <CarouselWrap>
        <div className="CardContainer">
          <Fade left>
            {DummyData1.map((items) => {
              return (
                <>
                  {' '}
                  <div className="CardWrap" key={items.id}>
                    <a href={items.link}>
                      <div className="TextWrap">
                        <span>{items.Title}</span>
                        <p>{items.Content}</p>
                      </div>
                      <div className={items.className}>
                        <div className="MainImg">
                          <img
                            src={items.ImgURL}
                            alt="페이지 주요 기능 이미지"
                          ></img>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </Fade>

          <Fade right>
            {DummyData2.map((items) => {
              return (
                <>
                  {' '}
                  <div className="CardWrap" key={items.id}>
                    <a href={items.link}>
                      <div className="TextWrap">
                        <span>{items.Title}</span>
                        <p>{items.Content}</p>
                      </div>
                      <div className={items.className}>
                        <div className="MainImg">
                          <img
                            src={items.ImgURL}
                            alt="페이지 주요 기능 이미지"
                          ></img>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </Fade>
        </div>
      </CarouselWrap>
    </>
  );
};

export default Carousel;
const CarouselWrap = styled.div`
  width: 80%;
  margin: auto;
  diplay: flex;
  .CardContainer {
    width: 100%;
    margin: auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    column-gap: 5rem;
    .CardWrap {
      width: 320px;
      margin-bottom: 1rem;
      transition: all 0.3s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .TextWrap {
    font-size: 1.2rem;
    padding: 1rem;
    line-height: 1rem;
    > p {
      height: 50px;
      font-size: 1rem;
      margin-top: 1rem;
      line-height: 1.5rem;
    }
  }
  .Yellow {
    width: 100%;
    box-shadow: grey 0px 0px 3px;
    border-radius: 2rem;
    background-color: #ffc149;
    margin-top: 1rem;
  }
  .Pink {
    width: 100%;
    box-shadow: grey 0px 0px 3px;
    border-radius: 2rem;
    background-color: #ff9fd7;
    margin-top: 1rem;
    padding: 1rem;
  }
  .Blue {
    width: 100%;
    box-shadow: grey 0px 0px 3px;
    border-radius: 2rem;
    background-color: #00d2ff;
    margin-top: 1rem;
  }
  .MainImg {
    > img {
      width: 100%;
      height: 100%;
      margin: auto;
      margin-top: 0.3rem;
    }
  }
`;
