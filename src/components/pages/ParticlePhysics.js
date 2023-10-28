import React from "react";
import Header from "../layout/Header";
import "./ParticlePhysics.css";
import Box from "../layout/Box";

const ParticlePhysics = () => {
    return <div>
        <Header />
        <div className="layout">
             <div className="flexColumn">
                <h1>The Importance Of Computational Particle Physics </h1>

                <h3>By Anton Egorov. (See info below)</h3>

                <h2> Introduction </h2>

                <p>
                    Learning/simulating particle physics is essential to humans' understanding
                    of the universe around us. Some theorems about particle physics can be proven in real-world
                    experiments, but a lot of them cannot be. This is where the importance of computer
                    science comes into play in simulating the universe around us. By simulating complex
                    models with the use of computational power, we are able to prove/conseptualise
                    theorems and/or phenomenoms in computer science that just would simply not be
                    possible without computation.

                </p>

                <p>
                    In this page, I will briefly discuss the tools that are used in computational particle physics, 
                    and the positive impacts it has made on each of our lives.
                </p>

                <h2> Tools Used in Computational Particle Physics</h2>

                <p>The tools used in computational physics are:</p>

                <dl>
                    <dt>Computer Algebra</dt>
                    <dd>
                        Computer algebra is a scientific area that refers to the study and development of algorithms
                        and software for manipulating mathematical expressions and mathematical objects. Many of the
                        computer algebra languages were developed initally to help solve particle physics calculations,
                        such as Reduce, Form, Mathematica, etc. (see citations c1,c2)
                    </dd>
                    <dt>Data Grid</dt>
                    <dd>
                        Data Grid is the production of data from grid systems - the use of widely distributed computer
                        resources to reach a common goal. Grids are composed of many networked loosely coupled computers
                        acting together to perform large tasks. The largest example of use of grid systems will be for 
                        the analysis of the Large Hadron Collider (LHC) - the world's largest and highest energy 
                        particle collider. In the example of LHC, software packages have been developed to support this 
                        application, such as the LHC Computing Grid. (see citations c1, c3)
                    </dd>
                    <dt>Data Analysis Tools</dt>
                    <dd>
                        As one may expect, particle physics experiments and simulations will generate a LOT of data, 
                        often creating Large Data Sets, which need to be efficiently, but effectively analysed to 
                        be able to draw conclusions from that data. Big Data techniques such as functional programming, 
                        record locks may be used to operate on large data sets. (see citiations c1)
                    </dd>
                    <dt>Software Libraries (Monte Carlo Methods)</dt>
                    <dd>
                        Many software libraries are used for particle physics generations. Packages that are of 
                        particular importance for simulating particle physics interactions are ones that use 
                        Monte Carlo simulation techniques. To put it briefly, Monte Carlo methods are a broad class 
                        of computational algorithms that rely on repeated random sampling to obtain numerical results. 
                        Monte Carlo methods are particularly useful because they can simulate systems with many coupled 
                        degrees of freedom, such as interacting particle systems. (see citations c1, c5)
                    </dd>
                </dl>

            </div> 
        </div>
    </div>
}

export default ParticlePhysics