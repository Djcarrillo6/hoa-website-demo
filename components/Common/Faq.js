import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
							Los Villas de Visa Mariposa (LVVM), founded in 1982, is the Master Homeowners Association for most of the City of Mission Viejo 
							and a small portion of the City of Laguna Hills located at Laguna Hills Drive and Moulton Parkway. The staff at Vista Mariposa knows that living in an HOA can come
							with many questions. To visit a full list of the community's FAQ
							section, please click <a href='/faq'>here.</a>
						</p>
						<div class='faqbtn'>
							<Link href='/faqfull'>
								<button className='btn btn-primary'>FAQ</button>
							</Link>
						</div>
					</div>

					<div className='col-md-6 faq-section'>
						<div className='faq-image'>
							<img src='/images/faq-bg.jpg' alt='img' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;

// class Faq extends Component {

//     toFaqSection() {
//         const router = useRouter();
//         router.push('/faq');
//     }

//     render() {
//         return (
//             <section id="faq" className="faq-area ptb-100">
//                 <div className="container">
//                     <div className="section-title">
//                         <span>FAQ</span>
//                         <h2>Frequently Asked <b>Questions</b></h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                     </div>

//                     <div className="row">
//                         <div className="col-md-6">

//                                 <p>The staff at Vista Mariposa knows that living in an HOA came come with many questions. To visit
//                                     a full list of our community's FAQ section, click <a href="/faq">here.</a>
//                                 </p>
//                                 <div class="faqbtn">
//                                     <button
//                                     onClick={this.toFaqSection}
//                                     className="btn btn-primary" >
//                                         FAQ
//                                     </button>
//                                 </div>
//                         </div>

//                         <div className="col-md-6 faq-section">
//                             <div className="faq-image">
//                                 <img src="/images/faq-bg.jpg" alt="img" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Faq;
