import React from "react";
import Header from "../layout/Header";
import "./ParticlePhysics.css";
import Box from "../layout/Box.js"

const ParticlePhysics = () => {
    return <div>
        <Header />
        <div className="layout">
            <h1>The Wonders of Particle Physics!</h1>
             <div className="items">
                <Box>
                    Here is some example text to test the functionality of this box.
                </Box>
            </div> 
        </div>
    </div>
}

export default ParticlePhysics