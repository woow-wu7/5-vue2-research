import axios from '../index'



export const getTableDate = () => {
  return axios({
    method: 'GET',
    url: '/api/table',
  })
};
