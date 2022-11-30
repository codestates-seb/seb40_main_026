import DetailView from '../Shared/DetailView';
import BoastComment from './BoastComment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';

function BoastViewMain() {
  let { id } = useParams();
  const [TitleData, SetTitleData] = useState();
  const [ContentData, SetContentData] = useState();
  const [list, SetList] = useState([]);
  const access = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  // 조회요청
  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}boasts/${id}`,
    }).then((res) => {
      SetList(res.data);
      console.log(res.data);
    });
  }, []);

  // 수정 요청
  const EditPatch = () => {
    axios({
      method: 'patch',
      url: `${BASE_URL}boasts/${id}`,
      data: { title: TitleData, content: ContentData },
    })
      .then(function (response) {
        EditPatch(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 삭제요청

  const DeleteHandler = () => {
    axios
      .delete(`${BASE_URL}boasts/${id}`, {
        headers: {
          Authorization: access,
        },
      })
      .then((res) => {
        console.log(res);
        navigate('/boast');
      });
  };

  return (
    <>
      <DetailView
        Data={list}
        SetTitleData={SetTitleData}
        SetContentData={SetContentData}
        DeleteHandler={DeleteHandler}
        EditPatch={EditPatch}
      />
      <BoastComment boastId={id} />
    </>
  );
}

export default BoastViewMain;
