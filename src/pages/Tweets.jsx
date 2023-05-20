import { Link } from "react-router-dom";
import CardsList from "../components/CardsList/CardsList";
import commonCss from "../styles/common.module.css";
import css from "./pages.module.css";

const Tweets = () => {


    return (
        <div className={commonCss.container}>
            <Link to="/">
                <button className={css['goback-btn'] } type="button">Go Back</button>
            </Link>
            <CardsList/>
        </div>
    )
}

export default Tweets;