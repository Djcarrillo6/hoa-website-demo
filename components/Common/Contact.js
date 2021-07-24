import React from 'react';

const Contact = () => {
	return (
		<section id='contact' className='contact-area ptb-100 bg-image'>
			<div className='container'>
				<div className='section-title'>
					<span>Get In Touch</span>
					<h2>
						<b>Contact</b> Us
					</h2>
					<p>
						Please note that the Los Villas of Shorecliff Villages (LVVM)
						correspondence policy requires a Member’s name and LVVM property
						address prior to communicating with individuals on Association
						related matters.
					</p>
				</div>

				<div className='row'>
					<div className='col-lg-4 col-md-6'>
						<div className='contact-info'>
							<i className='icofont-google-map'></i>
							<p>100 Eon Ln. Mission Viejo, CA 92692</p>
						</div>
					</div>

					<div className='col-lg-4 col-md-6'>
						<div className='contact-info'>
							<i className='icofont-envelope'></i>
							<p>info@shorecliffvillages.com</p>
						</div>
					</div>

					<div className='col-lg-4 col-md-6' id='ip-ml'>
						<div className='contact-info'>
							<i className='icofont-phone'></i>
							<p>(949) 987-5316</p>
						</div>
					</div>
				</div>
				<div className='contact-form'>
					<form id='contactForm'>
						<div className='row'>
							<div className='col-md-6'>
								<div className='form-group'>
									<input
										type='text'
										name='name'
										className='form-control'
										id='name'
										placeholder='Name'
										required
									/>
								</div>
							</div>

							<div className='col-md-6'>
								<div className='form-group'>
									<input
										type='email'
										className='form-control'
										name='email'
										id='email'
										placeholder='Email Address'
										required
									/>
								</div>
							</div>

							<div className='col-md-6'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										name='msg_subject'
										id='msg_subject'
										placeholder='Subject'
										required
									/>
								</div>
							</div>

							<div className='col-md-6'>
								<div className='form-group'>
									<input
										type='text'
										name='phone_number'
										id='phone_number'
										className='form-control'
										placeholder='Phone Number'
										required
									/>
								</div>
							</div>

							{/* Not in original template! */}
							<div className='col-md-12'>
								<div className='form-group'>
									<textarea
										placeholder='Association Address'
										name='address'
										id='address'
										className='form-control'
										rows='3'
										required></textarea>
								</div>
							</div>

							<div className='col-md-12'>
								<div className='form-group'>
									<textarea
										placeholder='Message'
										name='message'
										id='message'
										className='form-control'
										rows='6'
										required></textarea>
								</div>
							</div>

							<div className='col-md-12 text-center'>
								<button type='submit' className='btn btn-primary'>
									Send Message
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
