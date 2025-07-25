import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hackothon1.netlify.app/'
});

export default instance;