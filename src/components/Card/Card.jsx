// import '../../fonts/Montserrat-Italic-VariableFont_wght.ttf'
import { useState } from "react";
// import avatar from "../../images/hansel.png"
import FetchUsers from "../../services/FetchUsers";
import css from "./Card.module.css";

const Card = ({ user, onChangeFollowers }) => {
    const [isPressed, setIsPressed] = useState(user.isFollowing);
    // const [currentFollowers, setCurrentFollowers] = useState(user.followers)

    const onClickButton = () => {
        if(!isPressed) {
            const data = FetchUsers.updateFollowersUser({...user, followers: user.followers + 1});
            data.then(res => onChangeFollowers({...res, isFollowing: true}));
        } else {
            const data = FetchUsers.updateFollowersUser({...user, followers: user.followers - 1});
            data.then(res => onChangeFollowers({...res, isFollowing: false}));
        };

        setIsPressed(prev => !prev);
    }

    function getNumberWithDivider(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // const onClickUpdate = () => {
    //     const data = FetchUsers.updateFollowersUser(user);
    //     data.then(res => onChangeFollowers(res));
    // }

    return (
        <div className={css['card-wrap']}>
            <div className={css['avatar-frame']}>
                <img className={css['avatar-image']} src={user.avatar} width="62" height="62" alt="avatar" />
            </div>
            <p className={css['user-tweets']}>{user.tweets} TWEETS</p>
            <p className={css['user-followers']}>{getNumberWithDivider(user.followers)} FOLLOWERS</p>
            <button className={isPressed || user.isFollowing ? (`${css['follow-btn']} ${css['following-btn']}`) : css['follow-btn']} onClick={onClickButton} type="button">
                {isPressed || user.isFollowing ? "FOLLOWING" : "FOLLOW"}
            </button>
            {/* <button onClick={onClickUpdate}>Update folowwers</button> */}
        </div>
    );
}

export default Card;