import React from 'react';
import Link from 'next/link';

const Footer = () => {
	const asystHref = 'https://myaccount.powerstonepm.com/_UserLogin?Mode=Register';

	// TODO: env.local VARIABLES
	const client_id = env.local.client_id || '';
	const app_id = env.local.app_id || '';
	const deploymentURL = env.local.deploymentURL || '';
	const asystAppAuthEndpoint = `https://myaccount.powerstonepm.com/_AppAuth?redirect_uri=https://${deploymentURL}/requestTokens&client_id=${client_id}&app_id=${app_id}`;


	/*
	TODO: Create an onClick function to add parameters to the URL & navigate the user to the new URL.

	* JS Add Parameter To URL Without Reloading Page.
	<script>
		var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname + '?arg=1';    
		window.history.pushState({ path: currentURL }, '', currentURL);
	</script>
	*/

	let currentYear = new Date().getFullYear();

	return (
		<footer className='footer-area'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-6 col-md-7'>
						<p>
							<i className='icofont-copyright'></i>
							{currentYear} All Rights Reserved by Powerstone Property
							Management
						</p>
					</div>
					<div className='col-lg-6 col-md-5'>
						<ul>
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
						<div>
							<button className='admin-btn'>
								<Link href={asystHref}>
									<a className='nav-link' target='_blank'>
										Admin
									</a>
								</Link>
								{/* 
								<Link href={asystAppAuthEndpoint}>
									<a className='nav-link' target='_blank'>
										Admin
									</a>
								</Link>
								 */}
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
