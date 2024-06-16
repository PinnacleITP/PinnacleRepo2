import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_ENDPOINT}`,
  withCredentials: true,
});

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
