import React from "react";
import Header from "../layout/Header";
import "./PageStyling.css";

const ParticlePhysicsCitations = () => {
    return <div>
        <Header />
        <div className="layout">
             <div className="content-items">
                <h1>Particle Physics Citations</h1>

                <h2><a href='https://en.wikipedia.org/wiki/Computational_particle_physics'>c1 - Computational Particle Physics</a></h2>

                <h2><a href='https://en.wikipedia.org/wiki/Computer_algebra'>c2 - Computer Algebra</a></h2>

                <h2><a href='https://en.wikipedia.org/wiki/Grid_computing'>c3 - Grid Computing</a></h2>

                <h2><a href='https://en.wikipedia.org/wiki/Monte_Carlo_method'>c4 - Monte Carlo Method</a></h2>

                <h2><a href='https://news.fnal.gov/wp-content/uploads/particle-physics-benefits.pdf'>c5 - Benefits of Particle Physics - Fermilab</a></h2>
             </div>
        </div>
    </div>
}

export default ParticlePhysicsCitations