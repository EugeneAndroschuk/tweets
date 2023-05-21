import { useEffect, useState, useRef } from "react";
import FetchUsers from "../../services/FetchUsers";
import { onSetCurrentPage, getFilteredUsers } from "../../services/CardListServices";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from "../Card/Card";
import css from "./CardsList.module.css";
import { Divider } from "@mui/material";
import Loader from "../Loader/Loader";

const CardsList = () => {
    const [users, setUsers] = useState([]);
    const [nextPage, setNextPage] = useState(() => onSetCurrentPage());
    const [maxPage, setMaxPage] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [filterItem, setFilterItem] = useState(' ');
    const [isLoading, setIsLoading] = useState(false);
    const isFirstRender = useRef(true);
    const isFirstRender2 = useRef(true);

    const filteredUsers = getFilteredUsers(users, filterItem);

    useEffect(() => {
        function onReadFromLocalStorage() {
            try {
                const unparsed = localStorage.getItem('tweets');
                const parsed = JSON.parse(unparsed);
                if (parsed !== null) return [...parsed]
                else return [];
            } catch (error) {
                console.log(error);
                return [];
            }
        }

        const usersFromLocalStorage = onReadFromLocalStorage();
        if (usersFromLocalStorage.length !== 0) {
            setIsLoading(true);

            const data = FetchUsers.fetchUsersAll();
            data.then(res => {
                setMaxPage(Math.ceil(res.length / 3))
                if (res.length === usersFromLocalStorage.length) setIsDisabled(true);
                setIsLoading(false);
                const initialUsers = usersFromLocalStorage.map(userLocalStorage => {
                    const userFetch = res.filter(userFetchUsers => userLocalStorage.id === userFetchUsers.id);
                    if (userFetch.length === 0) {
                        console.log('user deleted');
                        return { ...userLocalStorage, user: 'User was deleted' };
                    }
                    else return { ...userFetch[0], isFollowing: userLocalStorage.isFollowing };
                });
                setUsers([...initialUsers]);
            });
        } else {
            setIsLoading(true);

            const dataForMaxPage = FetchUsers.fetchUsersAll();
            dataForMaxPage.then(res => setMaxPage(Math.ceil(res.length / 3)));

            const data = FetchUsers.fetchUsersAllPagination(1);
            data.then(res => {
                setIsLoading(false);
                const editedRes = res.map(user => ({ ...user, isFollowing: false, }));
                setUsers([...editedRes]);
            });
        }
    }, []);

    useEffect(()=>{
        if (isFirstRender2.current) { isFirstRender2.current = false; return }
        setIsLoading(true);
        const data = FetchUsers.fetchUsersAllPagination(nextPage);
        data.then(res => {
            setIsLoading(false);
            const editedRes = res.map(user => ({ ...user, isFollowing: false, }));
            setUsers(prev => [...prev, ...editedRes]);
        });
    },[nextPage]);

    useEffect(() => {
        if (isFirstRender.current) { isFirstRender.current = false; return }

        localStorage.setItem('tweets', JSON.stringify(users));
    }, [users]);

    const onClickLoadMore = () => {
        setNextPage(prev => prev + 1);
        if (nextPage >= maxPage - 1) {
            setIsDisabled(true);
            alert('It is last page');
        }
    }

    const onChangeFollowers = (updatedUser) => {
        const index = users.findIndex(user => user.id === updatedUser.id);
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1, updatedUser);

        setUsers(updatedUsers);
    }

    const handleChange = (event) => {
        setFilterItem(event.target.value);
    };

    // function onSetCurrentPage() {
    //     try {
    //         const unparsed = localStorage.getItem('tweets');
    //         const parsed = JSON.parse(unparsed);
    //         if (parsed !== null) return Math.ceil(parsed.length / 3);
    //         else return 1;
    //     } catch (error) {
    //         console.log(error);
    //         return 1;
    //     }
    // }

    // function getFilteredUsers(users, filter) {
    //     if (filter === " ") return users;
    //     else if (filter === "follow") return users.filter(user =>
    //         !user.isFollowing);
    //     else if (filter === "followings") return users.filter(user =>
    //         user.isFollowing);
    // }

    return (
        <section className={css.users}>
            <div className={css.dropDown}>
                <Select
                    value={filterItem}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ paddingLeft: '16px', paddingRight: '16px' }}
                >
                    <MenuItem value=" "><em>show all</em></MenuItem>
                    <MenuItem value="follow">follow</MenuItem>
                    <MenuItem value="followings">followings</MenuItem>
                </Select>
            </div>
            <Divider sx={{ borderBlockEndWidth: '2px' }} />

            <ul className={css['users-list']}>
                {filteredUsers.length === 0 && !isLoading && <h1>There is No Tweets</h1>}
                {filteredUsers.length > 0 && filteredUsers.map(user => (
                    <li key={user.id}>
                        <Card user={user} onChangeFollowers={onChangeFollowers} />
                    </li>
                ))}
            </ul>
            {isLoading && <Loader/>}

            {!isDisabled && !isLoading &&<button className={css['loadMore-btn']} onClick={onClickLoadMore} disabled={isDisabled} type="button">Load More</button>}
        </section>
    );
}

export default CardsList;