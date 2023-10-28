import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../layout//404.webp";
import Button from "../layout/Button";
import './PageNotFound.css';

const PageNotFound = () => {

    const navigate = useNavigate()

    const homePageHandler = () => {
        navigate('/home')
    }   

    return <span className="error">
        <p>Error: 404!</p>
        <img src={error} alt=""/>
        <p>Page Not Found</p>
        <Button color="white" name="Go Back Home" onClick={homePageHandler}/>
    </span>
}

export default PageNotFound