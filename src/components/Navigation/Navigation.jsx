import { NavLink } from "react-router-dom";
import commonCss from "../../styles/common.module.css";
import css from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div className={commonCss.container}>
            <ul className={css.navigation}>
                <li>
                    <NavLink className={css.link} to="/">
                        <button className={css['navigation-btn']}type="button">Home</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tweets">
                        <button className={css['navigation-btn']} type="button">Tweets</button>
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Navigation;