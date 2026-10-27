import axios from 'axios/dist/axios'; // build de browser: o Metro do RN 0.60 não resolve o campo "browser" do axios

const api = axios.create({
    baseURL: 'http://192.168.1.132:3333'
});

export default api;