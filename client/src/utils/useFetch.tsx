import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from './api';

const useFetch = (
  url: string,
  state?: any,
  token?: any,
  id?: string | string[] | number
) => {
  const [data, setData] = useState([]);
  const [Total, SetTotal] = useState([]);
  const [ImgSrc, SetImgSrc] = useState([]);
  const [TitleData, SetTitleData] = useState([]);
  const [ContentData, SetContentData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data);
        SetTotal(res.data.slice(0, state * 5));
        SetImgSrc(res.data.fileUrl);
        SetTitleData(res.data.nickname);
        SetContentData(res.data.content);
      })
      .catch((err) => {});
  }, [state]);

  return [data, Total, ImgSrc, TitleData, ContentData];
};

export default useFetch;
