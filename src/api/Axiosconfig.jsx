import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hackothon1-production.up.railway.app/'
});

export default instance;