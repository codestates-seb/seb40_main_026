import styled from 'styled-components';
import LikeButton from './LikeButton';
import { useState, useRef } from 'react';
import { mobile } from '../../styles/Responsive';
import { Viewer, Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const DetailView = ({
  Data,
  SetContentData,
  SetTitleData,
  EditPatch,
  DeleteHandler,
  LikeHandler,
  ReportHandler,
  checkLike,
  Setimage,
  image,
}) => {
  const [EditClick, SetEditClick] = useState(false);
  const [TitleId, setTitleId] = useState(Data.questionId);
  const textRef = useRef();
  //수정하기 버튼 클릭시 input창으로 변경
  const EditHandler = (id, url) => {
    if (id === TitleId) {
      setTitleId(0);
      SetEditClick(false);
      EditPatch();
    } else {
      setTitleId(id);
      SetEditClick(true);
      Setimage(url);
    }
  };
  console.log(Data.checkLike);
  return (
    <>
      <Detail>
        <section className="DetailViewWrap">
          <div>
            <div className="TitleWrap">
              <div className="DetailTitle">
                {Data.questionId === TitleId ? (
                  <input
                    defaultValue={Data.title}
                    onChange={(e) => SetTitleData(e.target.value)}
                  />
                ) : (
                  <h3>{Data.title}</h3>
                )}
              </div>

              <div className="Userinfo">
                <span>{Data.nickname} </span>
                <span>{Data.class}</span>
                <span>{Data.grade} </span>
                <span>{Data.createdAt}</span>
              </div>
            </div>
            <div className="UserWrap"></div>
            <div className="Article">
              {Data.questionId === TitleId ? (
                <>
                  {' '}
                  <input
                    type="file"
                    className="ImgInput"
                    onChange={(e) => {
                      Setimage(e.target.files[0]);
                    }}
                  ></input>
                  {image ? (
                    <>
                      <img src={image}></img>
                      <button
                        onClick={() => {
                          Setimage('');
                        }}
                      >
                        x
                      </button>{' '}
                    </>
                  ) : null}
                  <Editor
                    ref={textRef}
                    initialEditType="wysiwyg"
                    initialValue={Data.content}
                    onChange={() =>
                      SetContentData(
                        textRef.current.getInstance().getMarkdown().trim()
                      )
                    }
                  />
                </>
              ) : (
                <>
                  {Data.fileUrl ? <img src={Data.fileUrl}></img> : null}
                  <Viewer initialValue={Data.content} />
                </>
              )}

              <LikeButton
                likeCount={Data.likeCount}
                LikeHandler={() => LikeHandler(Data.questionId)}
                checkLike={checkLike}
              />
              <div className="Workbtn">
                <button
                  onClick={() => EditHandler(Data.questionId, Data.fileUrl)}
                >
                  {' '}
                  수정하기{' '}
                </button>
                <button onClick={DeleteHandler}> 삭제하기 </button>
                <button onClick={ReportHandler}> 신고하기 </button>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </Detail>
    </>
  );
};
const Detail = styled.div`
  width: 100%;
  margin-top: 1rem;

  .DetailViewWrap {
    width: 70%;
    margin: auto;

    .TitleWrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-shadow: grey 0px 0px 3px;
      border-radius: 0.5rem;
      padding: 1rem;
    }

    .DetailTitle {
      width: 80%;
      font-size: 1rem;
      > input {
        width: 100%;
      }
    }
    .Userinfo {
      font-size: 0.8rem;
    }
    .UserWrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      margin-bottom: 1rem;
      color: grey;
      .Workbtn {
        float: right;
      }
    }
  }
  .Article {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    box-shadow: grey 0px 0px 3px;
    border-radius: 0.5rem;
    padding: 1rem;
    > p {
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    .Workbtn {
      margin-top: 1rem;
      > button {
        padding: 0.2rem;
        margin-right: 0.5rem;
        background-color: #fff;
        border-radius: 2rem;
        cursor: pointer;
      }

      > button:hover {
        color: grey;
      }
    }
    > img {
      width: 50%;
    }
  }
  @media ${mobile} {
    .DetailTitle > h3 {
      font-size: 1rem;
    }
    .Userinfo > span {
      font-size: 0.5rem;
    }
    .Article > p {
      font-size: 0.8rem;
    }
  }
`;
export default DetailView;
