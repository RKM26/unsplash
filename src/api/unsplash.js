import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ckV2k98iPEsd565AOkoQXIW-rzPBiPWKroSRCSzUdok '
    }
});