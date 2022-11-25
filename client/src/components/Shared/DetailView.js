import styled from 'styled-components';
import LikeButton from './LikeButton';
import { useState } from 'react';
import { mobile } from '../../styles/Responsive';
import { Viewer, Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
const DetailView = ({ DummyData, likeCount }) => {
  console.log(DummyData);
  const [EditClick, SetEditClick] = useState(false);
  const [TitleId, setTitleId] = useState(0);
  const EditHandler = (id) => {
    if (id === TitleId) {
      setTitleId(0);
      SetEditClick(false);
    } else {
      setTitleId(id);

      SetEditClick(true);
    }
  };
  return (
    <>
      <Detail>
        <section className="DetailViewWrap">
          <div>
            <div className="TitleWrap">
              <div className="DetailTitle">
                {DummyData.id === TitleId ? (
                  <input defaultValue={DummyData.title} />
                ) : (
                  <h3>{DummyData.title}</h3>
                )}
              </div>

              <div className="Userinfo">
                <span>{DummyData.nickname} </span>
                <span>{DummyData.class}</span>
                <span>{DummyData.grade} </span>
                <span>{DummyData.date}</span>
              </div>
            </div>
            <div className="UserWrap"></div>
            <div className="Article">
              {DummyData.id === TitleId ? (
                <Editor
                  initialEditType="wysiwyg"
                  initialValue={DummyData.body}
                />
              ) : (
                <Viewer initialValue={DummyData.body} />
              )}

              <LikeButton likeCount={likeCount} />
              <div className="Workbtn">
                <button onClick={() => EditHandler(DummyData.id)}>
                  {' '}
                  수정하기{' '}
                </button>
                <button> 삭제하기 </button>
                <button> 신고하기 </button>
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
