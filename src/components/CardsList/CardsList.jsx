import { useEffect, useState } from "react";
import FetchUsers from "../../services/FetchUsers";
import Card from "../Card/Card";
import css from "./CardsList.module.css";

const TOTAL_PAGES = 12 / 3;

const CardsList = () => {
    const [users, setUsers] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const data = FetchUsers(nextPage);
        data.then(res => {
            const editedRes = res.map(user => ({ ...user, isClicked: false, }));
            setUsers(prev=>[...prev,...editedRes]);
        });
    }, [nextPage]);

    const onClickLoadMore = () => {
        setNextPage(prev=>prev + 1);
        if(nextPage === TOTAL_PAGES - 1) {
            setIsDisabled(true);
            alert('It is last page');
        }
    }

    return (
        <>
            
            <ul className={css['users-list']}>
                {users.map(user => (
                    <li key={user.id}>
                        <Card user={user} />
                    </li>
                ))}
            </ul>
            <button onClick={onClickLoadMore} disabled={isDisabled}>Load More</button>
        </>
    );
}

export default CardsList;