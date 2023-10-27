import React from "react";
import Header from "../layout/Header";
import "./ParticlePhysics.css";
import Box from "../layout/Box";

const ParticlePhysics = () => {
    return <div>
        <Header />
        <div className="layout">
             <div className="flexColumn">
                <h1>The Importance Particle Physics in Computer Science!</h1>
                <h2> Introduction </h2>
                <p>
                    Learning/simulating particle physics is essential to us humans' understanding
                    of the universe around us. Some theorems about particle physics can be proven in real-world
                    experiments, but a lot of them cannot be. This is where the importance of computer
                    science comes into play in simulating the universe around us. By simulating complex
                    models with the use of computational power, we are able to prove/conseptualise
                    theorems and/or phenomenoms in computer science that just would simply not be
                    possible without computation.

                </p>
            </div> 
        </div>
    </div>
}

export default ParticlePhysics