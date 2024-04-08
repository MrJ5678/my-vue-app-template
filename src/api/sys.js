import request from '@/utils/request';

export const getTest = () => {
  return request({
    url: '/test'
  });
};

// 登录
export const login = data => {
  return request({
    url: '/login',
    method: 'POST',
    data
  });
};
