import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ManagerHighlight = () => {
	const [_isMounted, set_IsMounted] = useState(false);
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		set_IsMounted(() => !_isMounted);
		setDisplay(() => !display);

		return () => {
			set_IsMounted(false);
			setDisplay(false);
		};
	}, []);

	return (
		<>
			<section id='testimonials' className='testimonial-area ptb-100 bg-image'>
				<div className='container'>
					<div className='section-title'>
						<span>Shorecliff Villages</span>
						<h2>
							Meet Your <b>Community</b> Management Team
						</h2>
					</div>
					<div className='testimonial-item'>
						<div className='client-image'>
							<img src='/images/kyliee.jpg' alt='image' />
						</div>

						<div className='testimonial-content'>
							<div className='desc'>
								<p>
									Kylie works closely with homeowners, boards of directors and
									suppliers to ensure the successful management of the
									associations she manages. She is a leader in assisting boards
									navigate through the HOA Business Planning process. Kylie has
									been responsible for oversight of operations, guidance and
									support to managers and support staff and she has developed a
									unique understanding of the requirements and responsibilities
									of the management profession. She has focused on promoting
									professionalism and increasing education for the community
									management industry.
								</p>
							</div>

							<div className='client-info'>
								<h3>Kylie Decker</h3>
								<span>Shorecliff Villages Community Manager</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ManagerHighlight;
