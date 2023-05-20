import axios from "axios";

axios.defaults.baseURL = 'https://645554f1f803f3457640a025.mockapi.io/users';

const FetchUsers = {
    fetchUsersAll,
    fetchUsersAllPagination,
    updateFollowersUser,
  };

  async function fetchUsersAll() {
    const config = {
        method: 'get',
    }
    const res = await axios(config);
    return res.data;
}

async function fetchUsersAllPagination(page) {
    const config = {
        method: 'get',
        params: {limit: 3, page: `${page}`},
    }
    const res = await axios(config);
    return res.data;
}

async function updateFollowersUser({id, user, tweets, followers, avatar}) {
    const config = {
        method: 'PUT',
        url: `/${id}`,
        data: {user, tweets, followers, avatar},
    }
    const res = await axios(config);
    return res.data;
}

export default FetchUsers;