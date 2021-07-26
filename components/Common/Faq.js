import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Faq = () => {
	return (
		<section id='faq' className='faq-area ptb-100'>
			<div className='container'>
				<div className='section-title'>
					<span>FAQ</span>
					<h2>
						Frequently Asked <b>Questions</b>
					</h2>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<p>
							Shorecliff Villages, founded in 1982, is the Master Homeowners
							Association for most of the City of Mission Viejo and a small
							portion of the City of Laguna Hills located at Laguna Hills Drive
							and Moulton Parkway. The staff at Shorecliff Villages knows that
							living in an HOA can come with many questions. To visit a full
							list of the community's FAQ section, please click{' '}
							<a href='/faq'>here.</a>
						</p>
						<div class='faqbtn'>
							<Link href='/faqfull'>
								<button className='btn btn-primary'>FAQ</button>
							</Link>
						</div>
					</div>

					<div className='col-md-6 faq-section'>
						<div className='faq-image'>
							<Image src={"/images/faq-bg.jpg"} 
							alt={"Friendly Community Associate"}
							width={800}
							height={378}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
