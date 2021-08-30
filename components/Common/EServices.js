import React from 'react';
import Link from 'next/link';

const EServices = () => {
	return (
		<section id='eservices' className='features-area ptb-100 bg-image'>
			<div className='container'>
				<div className='section-title'>
					<span>Shorecliff Villages Homeowner Services</span>
					<h2>
						Online <b>Homeowner</b> Services
					</h2>
					<p>
						We’re excited about offering association services online and
						consider it a valuable amenity for the association. At Powerstone
						Property Management, we strive to provide quality services to help
						make your life a little easier. We encourage you to spend more time
						living your life and less time waiting for it by using this site to:
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

					<Link href='/service-request'>
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
						<div className='col-lg-6 col-md-6'>
							<div className='single-features'>
								<div className='icon'>
									<i className='icofont-calendar'></i>
								</div>
								<h3>Community Reservations</h3>
								<p>Click to submit a reservation.</p>
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
};

export default EServices;
