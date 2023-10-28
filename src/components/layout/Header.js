import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layout/Button";
import './Header.css';
import logo from "./logo.png";

const Header = () => {

    let navigate = useNavigate()

    // const aboutPageHandler = () => {
    //     navigate('/about')
    // }

    const homePageHandler = () => {
        navigate('/home')
    }

    const particlePhysicsPageHandler = () => {
        navigate('/particlephysics')
    }

    const artificialIntelligenceHandler = () => {
        navigate('/artificial-intelligence');
    }
    console.log(logo)
    return <div className="container">
        <img src={logo} alt=""/>
         <h1 className="item">ProgBlack Assignment</h1>
        <div className="buttons">
            {/* <Button color="white" name="About" onClick={aboutPageHandler}/> */}
            <Button color="white" name="home" onClick={homePageHandler} />
            <Button color="white" name="AI/ML" onClick={artificialIntelligenceHandler} />
            <Button color="white" name="particle physics" onClick={particlePhysicsPageHandler} />
        </div>
    </div>
}

export default Header