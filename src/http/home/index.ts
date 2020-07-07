import axios from '../index'

interface Iprice {
  skuIds: string;
  type: number;
}

export const getPrice = ({skuIds, type}: Iprice) => {
  return axios({
    method: 'get',
    url: '/prices/mgets',
    params: {
      skuIds,
      type,
    }
  })
};
