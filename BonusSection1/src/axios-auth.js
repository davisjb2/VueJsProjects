import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-http-4b8b2.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;