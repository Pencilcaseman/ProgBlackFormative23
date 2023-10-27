import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "../layout/Box";
import Header from "../layout/Header";
import "./Home.css";

const Home = () => {

    let navigate = useNavigate()

    const tobyGitHandler = () => {
        alert("HAHA YOU THOUGHT")
    }

    return <div>
        <Header />
        <div className="layout">
        <h1>Computer Science Contributions To Society</h1>
            <h2>Our Contact Info</h2>
            <div className="items">
                <Box>
                    <h2>Toby Davis</h2>
                    {/* <Button color="white" name="Github" onClick={tobyGitHandler}/> */}
                </Box>
                <Box>
                    <h2>Anton Egorov</h2>
                </Box>
                <Box>
                    <h2>Lewis Hurd</h2>
                </Box>
                <Box>
                    <h2>
                        Shenghuan Xiao
                    </h2>
                </Box>
            </div>
        </div>
    </div>
}

export default Home