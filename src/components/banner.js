import React from "react";
import './banner.css';
import capsule from '../assets/capsule.jpg'

const Banner=()=>{

    return(
        <React.Fragment>
            <main className="banner">
                <section className="hero-tagline">
                    <div>
                        <h1 className="tagline">
                            We enable Space Travel and Exploration
                        </h1>
                        <h2 className="tagline-support">
                            Learn all about our capsules, which are enabling
                            the process of humans become multi-planetary species
                            by sending them and cargo into space.
                        </h2>
                    </div>
                </section>
                <section className="hero-image">
                    <img src={capsule} alt="capsule-in-orbit" />
                </section>
            </main>
        </React.Fragment>
    )
}
export default Banner;