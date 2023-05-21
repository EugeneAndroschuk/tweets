import { NavLink } from "react-router-dom";
import styled from "styled-components";
import commonCss from "../../styles/common.module.css";
import css from "./Navigation.module.css";

const StyledLink = styled(NavLink)`

    font-family: 'Montserrat-600';
    font-size: 14px;
    line-height: 1.22;
    text-transform: uppercase;
    text-decoration: none;
    color: #373737;

    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    cursor: pointer;

    padding: 2px 8px;

  &.active {
    background-color: #5CD3A8;
  }
`;

const Navigation = () => {
  
    return (
        <div className={commonCss.container}>
            <ul className={css.navigation}>
                <li>
                    <StyledLink to="/">
                      Home
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/tweetss">
                        Tweets
                    </StyledLink>
                </li>
            </ul>

        </div>
    )
}

export default Navigation;