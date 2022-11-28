import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
import { Viewer, Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useParams } from 'react-router-dom';
const Answer = () => {
  const DummyQuestions = [
    {
      id: 1,

      body: '답변입니다.',
      date: '2022-11-14',
      nickname: '치즈',
      grade: '답변왕',
      class: '🐣',
      likeCount: 1,
    },
    {
      id: 2,
      body: '답변입니다.',
      date: '2022-11-15',
      nickname: '치킨',
      grade: '답변왕',
      class: '🐣',
      likeCount: 0,
    },
  ];
  const [EditClick, SetEditClick] = useState(false);
  const [TitleId, setTitleId] = useState(0);
  const [Answer, setAnswer] = useState([]);
  const { id } = useParams();
  const EditHandler = (id) => {
    if (id === TitleId) {
      setTitleId(0);
      SetEditClick(false);
    } else {
      setTitleId(id);

      SetEditClick(true);
    }
  };
  useEffect(() => {
    axios
      ///questions/${id}
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${id}`
      )
      .then((res) => {
        setAnswer(res.data);
      });
  }, []);
  return (
    <AnswerView>
      <AnswerViewWrap>
        {Answer.map((items) => {
          return (
            <AnswerMainWrap key={items.id}>
              <AnswerTop>
                <div>
                  <div className="AnswerUserinfo ">
                    {' '}
                    <span> {items.nickname} </span>
                    <span> {items.grade} </span>
                    <span> {items.class} </span>
                    <span> {items.date} </span>
                  </div>{' '}
                  <BtnWrap>
                    <button onClick={() => EditHandler(items.id)}>
                      수정하기
                    </button>
                    <button>삭제하기</button>
                  </BtnWrap>
                </div>
                <div>
                  <div>
                    <LikeButton likeCount={items.likeCount} />
                  </div>
                </div>
              </AnswerTop>
              <AnswerBot>
                {items.answerId === TitleId ? (
                  <Editor
                    initialEditType="wysiwyg"
                    initialValue={items.content}
                  />
                ) : (
                  <Viewer initialValue={items.content} />
                )}
              </AnswerBot>
            </AnswerMainWrap>
          );
        })}
      </AnswerViewWrap>
    </AnswerView>
  );
};
const BtnWrap = styled.div`
  button {
    background-color: #fff;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  button:hover {
    color: grey;
  }
`;
const AnswerBot = styled.div`
  margin-top: 1rem;
  @media ${mobile} {
    p {
      font-size: 0.8rem;
    }
  }
`;
const AnswerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AnswerMainWrap = styled.div`
  box-shadow: grey 0px 0px 3px;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 1rem;
`;
const AnswerViewWrap = styled.div`
  width: 70%;
  margin: auto;
  padding: 1rem;
  box-shadow: grey 0px 0px 3px;
  border-radius: 1rem;
`;
const AnswerView = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  .AnswerViewWrap {
    .AnswerMainWrap {
      .AnswerTop {
      }
      .AnswerBot {
      }
    }
  }
  @media ${mobile} {
    .AnswerUserinfo > span {
      font-size: 0.8rem;
    }
  }
`;
export default Answer;
