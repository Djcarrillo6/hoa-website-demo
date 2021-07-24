import React from 'react';
import Link from 'next/link';

const CtaAreaTwo = () => {
	return (
		<div className='cta-area'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-8 col-md-8'>
						<div className='cta-content'>
							<h3>
								Do you need an immediate <b>service request</b>?
							</h3>
							<span>Contact the property management team directly!</span>
						</div>
					</div>

					<div className='col-lg-4 col-md-4 text-right'>
						<Link href='#contact'>
							<a className='btn btn-primary'>Contact Us</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CtaAreaTwo;
