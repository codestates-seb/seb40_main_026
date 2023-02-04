import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from './api';

const useFetch = (
  url: string,
  state?: number,
  id?: string | string[] | number,
  token?: any
) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();
    axios
      .get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
    return () => abortCont.abort();
  }, [url, id, state]);

  return [data];
};

export default useFetch;
