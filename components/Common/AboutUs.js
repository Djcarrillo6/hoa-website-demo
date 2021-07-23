import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100 bg-image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row about-image">
                                <div className="col-6 col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/images/houses3.jpg" alt="about" />
                                    </div>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/images/houses4.jpg" alt="about" />
                                    </div>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <div className="image mt-30">
                                        <img src="/images/houses1.jpg" alt="about" />
                                    </div>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <div className="image mt-30">
                                        <img src="/images/houses2.jpg" alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span>Vista Mariposa</span>
                                <h2> <b>Community Events</b></h2>
                                <p>Stay updated with the latest changes to your community!</p>
                                <ul>
                                    <li>New fields & equipment at Hummingbird Park.</li>
                                    <li>Grass and field repair at Crescent Park.</li>
                                    <li>New playground equipment at Sunrise Park.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;