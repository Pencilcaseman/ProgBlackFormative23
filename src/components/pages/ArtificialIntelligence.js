import React from "react";
import Header from "../layout/Header";
import "./ArtificialIntelligence.css";
import "./PageStyling.css";
const ArtificialIntelligence = () => {
    return <div>
        <Header/>
        <div className="layout">
                <h1>Artificial Intelligence and Machine Learning</h1>
                <h2>Fundamentals</h2>
                <div className={"flexColumn"}>
                <p>
                    The primary goal of artificial intelligence, or AI, is to enable machines to perform tasks that
                    require advanced reasoning and perception.
                </p>

                <p>
                    Machine learning, or ML, is a subset of the field of artificial intelligence that focuses on neural
                    networks, which aim to model the human brain. Neural networks.
                </p>

                <img src={"neuralNetworkDiagram.png"} alt={"Neural Network Diagram"}/>
            </div>
        </div>
    </div>
}

export default ArtificialIntelligence;
