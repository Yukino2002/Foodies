import axios from 'axios';
const baseUrl= 'http://localhost:3001/api/messages';

const sendMessage = (message, phoneNo) => {
    return axios.post(baseUrl, {body: message, to: phoneNo});
}

export default { sendMessage };