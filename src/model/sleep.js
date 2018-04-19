import axios from 'axios';

const api = 'https://sleep-tracker-api.herokuapp.com/api';
export const getAllSleep = () => {
  return axios.get(`${api}/sleep`).then(response => response.data);
};
