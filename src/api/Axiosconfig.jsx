import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hackothon1.vercel.app/'
});

export default instance;