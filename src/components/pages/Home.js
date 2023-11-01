import React from "react";
import Box from "../layout/Box";
import Button from "../layout/Button";
import Header from "../layout/Header";
import "./PageStyling.css";
import "./Home.css"

const Home = () => {
    return <div>
        <Header />
        <div className="layout">
        <h1>Computer Science Contributions To Society</h1>
            <h2>Our Contact Info</h2>
            <div className="home-items">
                <Box>
                    <h2>Toby Davis</h2>
                    <div class="flexRow">
                        <a href="https://github.com/Pencilcaseman" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="Github"/>
                        </a>

                        <a href="https://tobydavis.dev" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="Personal Website"/>
                        </a>

                        <a href="https://www.linkedin.com/in/toby-davis-codes/" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="LinkedIn"/>
                        </a>
                    </div>
                </Box>
                <Box>
                    <h2>Anton Egorov</h2>
                    <div class="flexRow">
                        <a href="https://github.com/antonov737" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="Github"/>
                        </a>

                        <a href="https://www.linkedin.com/in/anton-egorov-310a6a22a" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="LinkedIn"/>
                        </a>
                    </div>
                </Box>
                <Box>
                    <h2>Lewis Hurd</h2>
                    <div class="flexRow">
                        <a href="https://github.com/jelahu" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="Github"/>
                        </a>

                        <a href="https://www.linkedin.com/in/lewis-hurd-34829b257/" target="_blank" rel="noopener noreferrer">
                            <Button color="blue" name="LinkedIn"/>
                        </a>
                    </div>
                </Box>
                <Box>
                    <h2>
                        Shenghuan Xiao
                    </h2>
                    <a href="https://github.com/Piwaishang" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="Github"/>
                    </a> 
                </Box>
            </div>
        </div>
    </div>
}

export default Home