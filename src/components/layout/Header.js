import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layout/Button";
import './Header.css';

const Header = () => {

    let navigate = useNavigate()

    // const aboutPageHandler = () => {
    //     navigate('/about')
    // }

    const homePageHandler = () => {
        navigate('/home')
    }

    return <div className="container">
        <h1 className="item">Computing Contributions</h1>
        <div className="buttons">
            {/* <Button color="white" name="About" onClick={aboutPageHandler}/> */}
            <Button color="white" name="home" onClick={homePageHandler} />
        </div>
    </div>
}

export default Header