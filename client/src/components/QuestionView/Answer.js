import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
import { Viewer, Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useParams } from 'react-router-dom';
const Answer = ({ SetState, State }) => {
  const [EditClick, SetEditClick] = useState(false);
  const [TitleId, setTitleId] = useState(0);
  const [Answer, setAnswer] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const EditHandler = (Answerid) => {
    if (Answerid === TitleId) {
      setTitleId(0);
      SetEditClick(false);
      axios({
        method: 'patch',
        url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${Answerid}`,
        data: { questionId: id, content: Answer, answerId: Answerid },
        headers: {
          Authorization: token,
        },
      })
        .then(function (response) {
          SetState(State + 1);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setTitleId(Answerid);
      SetEditClick(true);
    }
  };
  const DeleteHandler = (id) => {
    axios
      .delete(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      });
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
  }, [State]);
  const LikeHandler = () => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${Answer.answerId}/like`,
      data: { id },
      headers: { Authorization: token },
    })
      .then(() => {
        SetState(State + 1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const EditPatch = () => {};
  return (
    <AnswerView>
      <AnswerViewWrap>
        {Answer.map((items) => {
          return (
            <AnswerMainWrap key={items.answerId}>
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
                    <button onClick={() => EditHandler(items.answerId)}>
                      수정하기
                    </button>
                    <button onClick={() => DeleteHandler(items.answerId)}>
                      삭제하기
                    </button>
                  </BtnWrap>
                </div>
                <div>
                  <div>
                    <LikeButton
                      likeCount={items.likeCount}
                      LikeHandler={LikeHandler}
                    />
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
