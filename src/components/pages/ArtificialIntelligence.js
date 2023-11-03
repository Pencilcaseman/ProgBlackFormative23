import React from "react";
import Header from "../layout/Header";
import "./ArtificialIntelligence.css";
import "./PageStyling.css";

const ArtificialIntelligence = () => {
    return <div>
        <Header/>
        <div className="layout">
            <h1>Artificial Intelligence and Machine Learning</h1>
            <div className={"flexColumn"}>
                <figure>
                    {/* This is broken */}
                    <img src={"neuralNetworkDiagram.png"} alt={"Neural Network Diagram"}/>
                    <figcaption>Deep Neural Network, taken from <a href="https://www.tobydavis.dev/tutorials/machineLearning/exploringNeuralNetworksInCPP" target="_blank" rel="noopener noreferrer"><code>tobydavis.dev</code></a></figcaption>
                </figure>

                <h2>Fundamentals</h2>

                <p>
                    The primary goal of artificial intelligence, or AI, is to enable machines to perform tasks that
                    require advanced reasoning and perception. For a long time, such tasks were thought to be impossible
                    for computers to perform due to the complexity of the inputs and subtleties in the data.
                </p>

                <p>
                    Machine learning, or ML, is a subset of the field of artificial intelligence that focuses on neural
                    networks, which aim to model the human brain. Neural networks are collections of nodes and synapses,
                    which are weighted connections between nodes. Neural networks must have at least two layers -- the 
                    first of which is known as the "input layer", and the last of which is known as the "output layer".
                    Any layers in the middle are called "hidden", since the programmer cannot interact with them directly.
                </p>

                <h2>Uses of Machine Learning</h2>

                <p>
                    Machine learning has revolutionised society, finding uses in every corner of our lives. From deciding
                    what videos to recommend you to helping scientists generate new vaccines, machine learning has become
                    engrained into the way we live.
                </p>

                <p>
                    Recently, many students have been using Large Language Models (LLMs), such as GPT-3.5, GPT-4, Claude
                    and Bard to help them with school work. For example, if a student did not understand a particular lesson
                    they can easily provide the relevant information to ChatGPT and receive a well-structured, well-written
                    and mostly factual answer in whatever teaching-style suits them best.
                </p>

                {/* Improved spacing needed between the following links */}
                <p>
                    AI models are also commonly used to assist programmers in developing applications. Programs such
                    as <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a>
                    and <a href="https://codeium.com" target="_blank" rel="noopener noreferrer">Codeium</a> integrate
                    directly into your IDE and provide real-time contextual code suggestions and completions.
                    Although criticised by many -- especially when used by novice programmers -- tools like these accelerate
                    development rapidly by reducing the time required to write boilerplate code, repetative code and common functions
                    or classes. This way, a project that may have taken weeks to complete can be written in a few days.
                </p>

                <h2>Feed Forward Algorithm</h2>
                <p>
                    One of the most fundamental and important opeations you can perform on a nerual network is the <em>feed forward</em> algorithm, 
                    which takes a set of input values, passes them <em>forward</em> through the network and produces a set of outputs.
                </p>

                <p>
                    To do this, the inputs values are assigned to their corresponding node in the input layer. The values are
                    passed along the synapses to the next layer, being multiplied by the weight when they do so. Each node
                    sums up all incoming values, adds a bias, and then passes the result throug a non-linear activation function.
                </p>

                <p>
                    This process is repeated until the input data has passed through every layer in the nextwork and has reached
                    the output layer. These values can then be interpreted and used to perform actions, make decisions and more.
                </p>
            </div>
        </div>
    </div>
}

export default ArtificialIntelligence;
