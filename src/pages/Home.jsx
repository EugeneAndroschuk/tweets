import commonCss from "../styles/common.module.css";
import css from "./pages.module.css";

const Home = () => {
    return (
        <div className={css['home-bgd']}>
            <div className={commonCss.container}>
                <div className={css['title-wrap']}>
                    <h1 className={css['title']}>tweetter</h1>
                </div>
            </div>
        </div>
        
    )
}

export default Home;