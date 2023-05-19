import axios from "axios";

axios.defaults.baseURL = 'https://645554f1f803f3457640a025.mockapi.io/users';

const FetchUsers = async (page) => {
    const config = {
        method: 'get',
        params: {limit: 3, page: `${page}`},
    }
    const res = await axios(config);
    return res.data;
}

export default FetchUsers;