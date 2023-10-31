import React from "react";
import Header from "../layout/Header";
import Button from "../layout/Button";
import "./PageStyling.css";
import "./ParticlePhysics.css";

const ParticlePhysics = () => {
    return <div>
        <Header />
        <div className="layout">
             <div className="content-items">
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
                    <h3>Computer Algebra</h3>
                    <p>
                        Computer algebra is a scientific area that refers to the study and development of algorithms
                        and software for manipulating mathematical expressions and mathematical objects. Many of the
                        computer algebra languages were developed initally to help solve particle physics calculations,
                        such as Reduce, Form, Mathematica, etc. (see citations c1,c2)
                    </p>
                    <h3>Data Grid</h3>
                    <p>
                        Data Grid is the production of data from grid systems - the use of widely distributed computer
                        resources to reach a common goal. Grids are composed of many networked loosely coupled computers
                        acting together to perform large tasks. The largest example of use of grid systems will be for 
                        the analysis of the Large Hadron Collider (LHC) - the world's largest and highest energy 
                        particle collider. In the example of LHC, software packages have been developed to support this 
                        application, such as the LHC Computing Grid. (see citations c1, c3)
                    </p>
                    <h3>Data Analysis Tools</h3>
                    <p>
                        As one may expect, particle physics experiments and simulations will generate a LOT of data, 
                        often creating Large Data Sets, which need to be efficiently, but effectively analysed to 
                        be able to draw conclusions from that data. Big Data techniques such as functional programming, 
                        record locks may be used to operate on large data sets. (see citiations c1)
                    </p>
                    <h3>Software Libraries (Monte Carlo Methods)</h3>
                    <p>
                        Many software libraries are used for particle physics generations. Packages that are of 
                        particular importance for simulating particle physics interactions are ones that use 
                        Monte Carlo simulation techniques. To put it briefly, Monte Carlo methods are a broad class 
                        of computational algorithms that rely on repeated random sampling to obtain numerical results. 
                        Monte Carlo methods are particularly useful because they can simulate systems with many coupled 
                        degrees of freedom, such as interacting particle systems. (see citations c1, c5)
                    </p>

                    <h2>The positive effects of Computational Particle Physics</h2>

                    <p>
                        Though there are many obvious positive effects of compututational particle physics 
                        that were mentioned in the Introduction (link here), there Some indirect effects which
                        may surprise you. (see citation c7)

                    </p>

                    <h3>The World Wide Web</h3>

                    <p>
                        Whatever one may think of the World Wide Web, it has impacted all of ourlives forever
                        (mostly positively). However the main reason the World Wide Web was even conceived and
                        created was because of particle physicists needing a fast and efficient way of sending 
                        information to their colleagues. In 1991-1992, SLAC, MIT and Fermilab launched the 
                        first webservers in the United States. As for what the WWW has become, I don't think 
                        I need to explain...
                    </p>

                    <h3>Cancer Therapy</h3>

                    <p>
                        Almost all medical centres in the United States use particle accelerators producing 
                        protons, X-rays, protons, neutrons or heavy ions for diagnosis and treatment of disease.
                        It is estimated there are 7000 accelerators that have treated over 30,000,00 patients for
                        cancer.
                    </p>

                    <h3>Power Transmission</h3>

                    <p>
                        Particle accelerators require a lot of power, and so it should be delivered in the most 
                        efficient way. In order to achieve efficient power delivery for their Tevaton accelerator, 
                        Fermilab partnered up with industry to mass-manufacture superconducting wire. These wires, 
                        because of their superconducting capabilities, can transfer far more electricity with minimal 
                        power losses.
                    </p>


                    <h3>Contact Info</h3>

                    <a href="https://github.com/antonov737" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/anton-egorov-310a6a22a" target="_blank" rel="noopener noreferrer">
                        <Button color="blue" name="LinkedIn"/>
                    </a>
            </div> 
        </div>
    </div>
}

export default ParticlePhysics