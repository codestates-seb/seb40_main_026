import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
import { Viewer, Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useParams, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
const Answer = ({ SetState, State }) => {
  const [EditClick, SetEditClick] = useState(false);
  const [TitleId, setTitleId] = useState(0);
  const [Answer, setAnswer] = useState([]);
  const [image, Setimage] = useState();
  const [ImgSrc, SetImgSrc] = useState();
  const [EditData, SetEditData] = useState();
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [UserInfo, SetUserInfo] = useState([]);
  const parse = token ? jwt_decode(token) : '';
  const UserId = parse.memberId;

  const textRef = useRef();
  const ImgHandler = (event) => {
    SetSrc(event.target.files[0]);
    Setimage(event.target.files[0]);
  };
  const SetSrc = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    return new Promise((resolve) => {
      reader.onload = () => {
        SetImgSrc(reader.result); //미리보기,서버에 보내줄 새로운 사진데이터
        resolve();
      };
    });
  };
  useEffect(() => {
    axios({
      mathod: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/members/${UserId}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetUserInfo(res.data);
    });
  }, []);
  const EditHandler = (item) => {
    if (item.answerId === TitleId) {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      formData.append('content', EditData);
      axios
        .patch(
          `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${item.answerId}`,
          formData,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          SetState(State + 1);
        })
        .catch((err) => {});
      setTitleId(0);
      SetEditClick(false);
    } else {
      setTitleId(item.answerId);
      SetEditClick(true);
      SetEditData(item.content);
      SetImgSrc(item.fileUrl);
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
        SetState(State + 1);
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${id}`
      )
      .then((res) => {
        setAnswer(res.data);
      });
  }, [State]);
  const LikeHandler = (id) => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${id}/like`,
      data: { id },
      headers: { Authorization: token },
    })
      .then(() => {
        SetState(State + 1);
      })
      .catch((err) => {});
  };

  return (
    <AnswerView>
      <AnswerViewWrap className={Answer.length > 0 ? '' : 'none-display'}>
        {Answer.map((items) => {
          return (
            <AnswerMainWrap key={items.answerId}>
              <AnswerTop>
                <div>
                  <div className="AnswerUserinfo ">
                    {' '}
                    {items.teacher ? <span>🌟</span> : null}
                    <span> {items.nickname} </span>
                    <span> {items.grade} </span>
                    <span> {items.class} </span>
                    <span> {items.date} </span>
                  </div>{' '}
                  {items.nickname === UserInfo.nickname ? (
                    <BtnWrap>
                      <button onClick={() => EditHandler(items)}>
                        수정하기
                      </button>
                      <button onClick={() => DeleteHandler(items.answerId)}>
                        삭제하기
                      </button>
                    </BtnWrap>
                  ) : null}
                </div>
                <div>
                  <div>
                    <LikeButton
                      likeCount={items.likeCount}
                      LikeHandler={() => LikeHandler(items.answerId)}
                      checkLike={items.checkLike}
                    />
                  </div>
                </div>
              </AnswerTop>
              <AnswerBot>
                {items.answerId === TitleId ? (
                  <>
                    <img src={ImgSrc ? ImgSrc : image}></img>
                    <br />
                    <input
                      type="file"
                      className="ImgInput"
                      onChange={ImgHandler}
                    ></input>
                    <Editor
                      ref={textRef}
                      initialEditType="wysiwyg"
                      initialValue={items.content}
                      onChange={() =>
                        SetEditData(
                          textRef.current.getInstance().getMarkdown().trim()
                        )
                      }
                    />
                  </>
                ) : (
                  <>
                    {/* <input
                   defaultValue={items.content}
                  onChange={(e) => SetEditData(e.target.value)}
                   /> */}
                    <img src={items.fileUrl ? items.fileUrl : image}></img>
                    <Viewer initialValue={items.content} />
                  </>
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
  .none-display {
    display: none;
  }
  @media ${mobile} {
    .AnswerUserinfo > span {
      font-size: 0.8rem;
    }
  }
`;
export default Answer;
