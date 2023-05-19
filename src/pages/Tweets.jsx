import { Link } from "react-router-dom";
import CardsList from "../components/CardsList/CardsList";

const Tweets = () => {


    return (
        <div>
            <Link to="/">Go Back</Link>
            <h1>TWEETS PAGE</h1>
            <CardsList/>
        </div>
    )
}

export default Tweets;