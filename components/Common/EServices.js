import React, { Component } from 'react';
import Link from 'next/link';

class EServices extends Component {
	render() {
		return (
			<section id='eservices' className='features-area ptb-100 bg-image'>
				<div className='container'>
					<div className='section-title'>
						<span>Vista Mariposa Homeowner Services</span>
						<h2>
							We Strive To <b>Understand</b> Community Expectation
						</h2>
						<p>
						Powerstone Property Management is determined to protect and maintain your privacy. 
						We are privileged to be trusted with your personal information and do not wish to jeopardize that trust.
						</p>
					</div>

					<div className='row'>
					<Link href='https://myaccount.powerstonepm.com/'>
							<div className='col-lg-6 col-md-6'>
								<div className='single-features'>
									<div className='icon'>
										<i className='icofont-upload-alt'></i>
									</div>
									<h3>Pay My Bill</h3>
									<p>Click here to pay your HOA bill.</p>
								</div>
							</div>
						</Link>
						
						<Link href='/'>
							<div className='col-lg-6 col-md-6'>
								<div className='single-features'>
									<div className='icon'>
										<i className='icofont-edit'></i>
									</div>
									<h3>Service Request</h3>
									<p>Quickly submit a service request.</p>
								</div>
							</div>
						</Link>
					</div>

					<div className='row'>
						<Link href='/'>
							<div className='col-lg-6 col-md-6 offset-lg-0 offset-md-3'>
								<div className='single-features'>
									<div className='icon'>
										<i className='icofont-calendar'></i>
									</div>
									<h3>Community Reservations</h3>
									<p>Click here to submit a reservation request.</p>
								</div>
							</div>
						</Link>
						<Link href='/'>
							<div className='col-lg-6 col-md-6'>
								<div className='single-features'>
									<div className='icon'>
										<i className='icofont-news'></i>
									</div>
									<h3>Community Documents</h3>
									<p>Click here to view your documents.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}

export default EServices;
