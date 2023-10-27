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

    const artificialIntelligenceHandler = () => {
        navigate('/artificial-intelligence');
    }

    return <div className="container">
        <h1 className="item">Programming Black 2023</h1>
        <div className="buttons">
            {/* <Button color="white" name="About" onClick={aboutPageHandler}/> */}
            <Button color="white" name="home" onClick={homePageHandler} />
            <Button color="white" name="AI/ML" onClick={artificialIntelligenceHandler} />
        </div>
    </div>
}

export default Header