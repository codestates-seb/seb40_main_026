import DetailView from '../Shared/DetailView';
import BoastComment from './BoastComment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';

function BoastViewMain() {
  let { boastId } = useParams();
  const [TitleData, SetTitleData] = useState();
  const [ContentData, SetContentData] = useState();
  const [list, setList] = useState([]);
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  // 조회요청
  useEffect(() => {
    async function fetchItem() {
      const res = await axios.get(`${BASE_URL}boasts/${boastId}`, {
        Authorization: token,
      });
      let data = res.data;
      setList(data);
      console.log(data);
    }
    try {
      fetchItem();
    } catch (err) {
      console.error(err);
    }
  }, []);

  // 수정요청

  //useEffect(() => {
  // async function EditPatch() {
  //  const res = await axios.patch(
  //    `${BASE_URL}boasts/${boastId}`,
  //   {
  //     title: TitleData,
  //     content: ContentData,
  //  },
  //   { Authorization: token }
  // );
  //  }
  //  try {
  //   EditPatch();
  // } catch (err) {
  //   console.error(err);
  //  }
  //}, []);

  // 삭제요청

  const DeleteHandler = () => {
    axios
      .delete(`${BASE_URL}boasts/${boastId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
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
      />
      <BoastComment boastId={boastId} />
    </>
  );
}

export default BoastViewMain;
