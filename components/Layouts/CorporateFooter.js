import React from 'react';
import Link from 'next/link';

const CorporateFooter = () => {
    
    /*
	    * JS Add Parameter To URL Without Reloading Page.
		var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname + '?arg=1';    
		window.history.pushState({ path: currentURL }, '', currentURL);
	*/

    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const app_id = process.env.NEXT_PUBLIC_APP_ID;
    const deploymentURL = process.env.NEXT_PUBLIC_DEPLOYMENT_URL;
    const asystHref = 'https://myaccount.powerstonepm.com/_UserLogin';
    const asystAppAuthEndpoint = `https://myaccount.powerstonepm.com/_AppAuth?redirect_uri=https://${deploymentURL}/requestTokens&client_id=${client_id}&app_id=${app_id}`;

    let currentYear = new Date().getFullYear();


    return (
        <>
            <footer className='corporate-footer-area'>
			<div className='container-fluid'>
				<div className='row align-items-stretch corp-row'>

					<div className='col-md-3'>
                        <img 
                        src="/images/powerstone/powerstone-logo-white.png"
                        alt="Powerstone-Logo White"
                        style={{marginBottom: '2rem'}}
                        />
                        <br/>
                        <p>
							<i className='icofont-phone'></i>
							855-253-0153
						</p>
                        <p>
							<i className='icofont-newspaper'></i>
							Request Proposal
						</p>
                        <p>
							<i className='icofont-credit-card'></i>
							Make Payment
						</p>
						<p>
							<i className='icofont-copyright'></i>
							{currentYear} All Rights Reserved by Powerstone Property
							Management
						</p>
                        <div>
							<button className='admin-btn'>
								<Link href={asystHref}>
									<a className='nav-link' target='_blank'>
										Admin
									</a>
								</Link>
							</button>
						</div>
					</div>

                    <div className='col-md-3'>
                            <p className="footer-col-header">
                                We Proudly Serve
                            </p>
                            <br/>
                            <p>
                                We proudly serve all of Southern California including the following:
                            </p>
                            <br/>
                            <p>
                                - North Orange County
                            </p>
                            <p>
                                - South Orange County
                            </p>
                            <p>
                                - San Diego County
                            </p>
                            <p>
                                - Inland Empire
                            </p>
                            <p>
                                - Coachella Valley
                            </p>
                            <p>
                                - Bay Area
                            </p>
					</div>

                    <div className='col-md-3'>
                        <p className="footer-col-header">
                            News & Press Releases
                        </p>
                        <p>
                            POWERSTONE ANNOUCES EXECUTIVE PROMOTIONS, KENDRAH KAY PROMOTED TO CHIEF CLIENT OFFICER (CCO) TO FOCUS ON CLIENT SATISFACTION.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            Debut of BASIC New Homes Showcase Officers Powerful Online Engine for Direct Engagment Between Homebuyers and Builder Communities.
                        </p>
					</div>

                    <div className='col-md-3'>
                        <p className="footer-col-header">
                            Connect With Us
                        </p>
						<ul className="corporate-social-links" >
							<li>
								<Link href='https://www.facebook.com/PowerstonePM/'>
									<a>
										<i className='icofont-facebook'></i>
									</a>
								</Link>
							</li>
							<li>
								<Link href='https://www.instagram.com/powerstonepm/'>
									<a>
										<i className='icofont-instagram'></i>
									</a>
								</Link>
							</li>
							<li>
								<Link href='https://www.linkedin.com/company/powerstone-pm/'>
									<a>
										<i className='icofont-linkedin'></i>
									</a>
								</Link>
							</li>
						</ul>
                        <br/>
                        <br/>
                        <p className="footer-col-header">
                            Our Locations
                        </p>
                        <p className="location-font">
                            - Corporate Office: Irvine
                        </p>
                        <p className="location-font">
                            - Anaheim Hills Office
                        </p>
                        <p className="location-font">
                            - San Diego Office
                        </p>
                        <p className="location-font">
                            - Coachella Valley Office
                        </p>
                        <p className="location-font">
                            - Inland Empire Office 
                        </p>
                        <p className="location-font">
                            - Bay Area Office
                        </p>
					</div>
				</div>
			</div>
		</footer>
        </>
    );
};

export default CorporateFooter;