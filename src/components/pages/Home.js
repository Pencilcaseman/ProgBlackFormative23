import React from "react";
import Box from "../layout/Box";
import Button from "../layout/Button";
import Header from "../layout/Header";
import "./PageStyling.css";

const Home = () => {
    const Bool = false

    const shenPageHandler  = () => {
        alert("Could Not Find Their GitHub")

    }
    return <div>
        <Header />
        <div className="layout">
        <h1>Computer Science Contributions To Society</h1>
            <h2>Our Contact Info</h2>
            <div className="home-items">
                <Box>
                    <h2>Toby Davis</h2>
                    {/* https://bobbyhadz.com/blog/react-button-link */}
                    {/* For Help on getting the button to navigate to an external page */}
                    <a href="https://github.com/Pencilcaseman" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="Github"/>
                    </a>
                </Box>
                <Box>
                    <h2>Anton Egorov</h2>
                    <a href="https://github.com/antonov737" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="Github"/>
                    </a>
                </Box>
                <Box>
                    <h2>Lewis Hurd</h2>
                    <a href="https://github.com/jelahu" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="Github"/>
                    </a>
                </Box>
                <Box>
                    <h2>
                        Shenghuan Xiao
                    </h2>
                    <a href="https://github.com/Pencilcaseman/ProgBlackFormative23" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="Github" onClick={shenPageHandler}/>
                    </a> 
                </Box>
            </div>
        </div>
    </div>
}

export default Home