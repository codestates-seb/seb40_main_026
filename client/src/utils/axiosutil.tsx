import { BASE_URL } from './api';
import axios from 'axios';
import { useState } from 'react';
export const fetchCreate = (
  url: string,
  token: any,
  content: string,
  image?: string,
  title?: string
) => {
  const formData = new FormData();
  if (image) {
    formData.append('image', image);
  }
  formData.append('title', title);
  formData.append('content', content);
  axios
    .post(`${BASE_URL}${url}`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {})
    .catch((err) => {});
};

export const fetchDelete = (
  url: string,
  data: {},
  id?: number | string[] | string
) => {};

export const fetchPatch = (
  url: string,
  data: {},
  id?: string[] | string | number
) => {};
