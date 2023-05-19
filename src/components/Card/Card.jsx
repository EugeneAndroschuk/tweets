import { useState } from "react";
import avatar from "../../images/hansel.png"
import css from "./Card.module.css";

const Card = ({ user }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [currentFollowers, setCurrentFollowers] = useState(user.followers)

    const onClickButton = () => {
        if(!isPressed) setCurrentFollowers(prev=>prev + 1); else setCurrentFollowers(prev=>prev - 1);
        setIsPressed(prev => !prev);
    }

    return (
        <div className={css['card-wrap']}>
            <div className={css['avatar-frame']}>
                <img className={css['avatar-image']} src={avatar} width="62" height="62" alt="avatar" />
            </div>
            <p className={css['user-tweets']}>{user.tweets} TWEETS</p>
            <p className={css['user-followers']}>{currentFollowers} FOLLOWERS</p>
            <button className={isPressed ? (`${css['follow-btn']} ${css['follow-btn-pressed']}`) : css['follow-btn']} onClick={onClickButton} type="button">
                {isPressed ? "FOLLOWING" : "FOLLOW"}
            </button>
        </div>
    );
}

export default Card;