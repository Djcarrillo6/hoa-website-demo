import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';
import ReactWOW from 'react-wow';

const options = {
	loop: true,
	nav: true,
	dots: false,
	autoplayHoverPause: true,
	autoplay: true,
	margin: 30,
	navText: [
		"<i class='icofont-rounded-left'></i>",
		"<i class='icofont-rounded-right'></i>",
	],
	responsive: {
		0: {
			items: 1,
		},
		576: {
			items: 2,
		},
		992: {
			items: 3,
		},
	},
};

class Board extends Component {
	_isMounted = false;
	state = {
		display: false,
	};
	componentDidMount() {
		this._isMounted = true;
		this.setState({ display: true });
	}
	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		return (
			<section id='team' className='team-area ptb-100 bg-image'>
				<div className='container'>
					<ReactWOW animation='fadeInUp' delay='0.1s'>
						<div className='section-title'>
							<span>Meet Your Board</span>
							<h2>
								Vista Mariposa <b>Board of Directors</b>
							</h2>
						</div>
						<div id='section-info'>
							<p>
								Vista Mariposa Community Association (VMCA), founded in 1982, is
								the Master Homeowners Association for most of the City of Vista
								Mariposa and a small portion of the City of Laguna Hills located
								at Laguna Hills Drive and Moulton Parkway. Vista Mariposa
								Community Association’s mission is to protect, preserve and
								maintain the Association’s twenty-one parks and slopes within
								the City of Aliso Viejo in an attractive and safe manner while
								striving to improve the recreational experience for AVCA dues
								paying members. AVCA’s goal is to bring civic betterments and
								social improvements to the Association’s privately-owned parks
								and provide for the preservation of the architecture and
								appearance of the residential communities.
							</p>
						</div>
					</ReactWOW>

					{this.state.display ? (
						<OwlCarousel
							className='team-slides owl-carousel owl-theme'
							{...options}>
							<div className='team-box'>
								<img src='/images/president.jpeg' alt='team-image' />

								<div className='box-content'>
									<div className='box-inner-content'>
										<h3 className='title'>Steven Smitn</h3>
										<span className='post'>President</span>

										<ul>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-facebook'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-linkedin'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-twitter'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-instagram'></i>
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='team-box'>
								<img src='/images/vice-president.jpeg' alt='team-image' />

								<div className='box-content'>
									<div className='box-inner-content'>
										<h3 className='title'>Alina Eva</h3>
										<span className='post'>Vice President</span>

										<ul>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-facebook'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-linkedin'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-twitter'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-instagram'></i>
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='team-box'>
								<img src='/images/secretary.jpeg' alt='team-image' />

								<div className='box-content'>
									<div className='box-inner-content'>
										<h3 className='title'>James Anderson</h3>
										<span className='post'>Treasurer</span>

										<ul>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-facebook'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-linkedin'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-twitter'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-instagram'></i>
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='team-box'>
								<img src='/images/treasurer.jpeg' alt='team-image' />

								<div className='box-content'>
									<div className='box-inner-content'>
										<h3 className='title'>Tony Lucy</h3>
										<span className='post'>Secretary/Asst Teasurer</span>

										<ul>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-facebook'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-linkedin'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-twitter'></i>
													</a>
												</Link>
											</li>
											<li>
												<Link href='#'>
													<a target='_blank'>
														<i className='icofont-instagram'></i>
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</OwlCarousel>
					) : (
						''
					)}
				</div>
			</section>
		);
	}
}

export default Board;
