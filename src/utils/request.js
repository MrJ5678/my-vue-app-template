import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
// const baseURL = 'http://127.0.0.1:3001';
// console.log(baseURL);
const request = axios.create({
  baseURL
});

request.interceptors.response.use(
  res => {
    const {
      data: { data, errno }
    } = res;

    // console.log(data);
    // console.log(errno);
    if (errno === 0) {
      return data;
    } else {
      throw new Error(data);
    }
  },
  reason => {
    console.log(reason);
    if (reason && reason.response && reason.response.status === 401) {
      console.log(reason.response.statusText);
      throw new Error(reason.message);
    }

    throw new Error(reason.message);
  }
);

export default request;
