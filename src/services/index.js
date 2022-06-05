/* eslint-disable prettier/prettier */
import Axios from 'axios';
import { API_URL } from '@env';

const AxiosInstance = Axios.create({ baseURL : API_URL });

export default AxiosInstance;
