import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:1,
        },
        1024: {
            items:2,
        }
    }
}

class ManagerHighlight extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
            <section id="testimonials" className="testimonial-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Vista Mariposa</span>
                        <h2>Meet Your <b>Community</b> Management Team</h2>
                    </div>
                    <div className="testimonial-item">
                            <div className="client-image">
                                <img src="/images/kyliee.jpg" alt="image" />
                            </div>

                            <div className="testimonial-content">
                                <div className="desc">
                                    <p>Kylie works closely with homeowners, boards of directors and suppliers to ensure the successful management of the associations she manages. She is a leader in assisting boards navigate through the HOA Business Planning process. Kylie has been responsible for oversight of operations, guidance and support to managers and support staff and she has developed a unique understanding of the requirements and responsibilities of the management profession. She has focused on promoting professionalism and increasing education for the community management industry.</p>
                                </div>

                                <div className="client-info">
                                    <h3>Kylie Decker</h3>
                                    <span>Vista Mariposa Community Manager</span>
                                </div>
                            </div>
                    </div>
                </div>

                {/* <div className="row team-member-row">
                    <div className='col-md-3'>
							<div className='single-features'>
                            <div className="client-image">
                                <img src="/images/small-per8.png" className="secondary-team-img" alt="image" />
                            </div>
								<h3>Asst Manager</h3>
								<p>Click here to pay your HOA bill.</p>
							</div>
					</div>
                    <div className='col-md-3'>
							<div className='single-features'>
                            <div className="client-image">
                                <img src="/images/small-per6.png" className="secondary-team-img" alt="image" />
                            </div>
								<h3>Pay My Bill</h3>
								<p>Click here to pay your HOA bill.</p>
							</div>
					</div>
                    <div className='col-md-3'>
							<div className='single-features'>
                            <div className="client-image">
                                <img src="/images/small-per7.png" className="secondary-team-img" alt="image" />
                            </div>
								<h3>Pay My Bill</h3>
								<p>Click here to pay your HOA bill.</p>
							</div>
					</div>
                </div> */}
            </section>
            </>
        );
    }
}

export default ManagerHighlight;