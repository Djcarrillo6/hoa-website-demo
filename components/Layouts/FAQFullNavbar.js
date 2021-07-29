import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const FAQFullNavbar = () => {
	const [collapsed, setCollapsed] = useState(true);
	const asystHref =
		'https://myaccount.powerstonepm.com/_UserLogin?Mode=Register';
	const classOne = collapsed
		? 'collapse navbar-collapse'
		: 'navbar-collapse collapse show';
	const classTwo = collapsed
		? 'navbar-toggler navbar-toggler-right collapsed'
		: 'navbar-toggler navbar-toggler-right';

	const toggleNavbar = () => {
		setCollapsed(() => !collapsed);
	};

	useEffect(() => {
		let _isMounted = true;
		let elementId = document.getElementById('navbar');
		document.addEventListener('scroll', () => {
			if (window.scrollY > 170) {
				elementId.classList.add('is-sticky');
			} else {
				elementId.classList.remove('is-sticky');
			}
		});
		window.scrollTo(0, 0);

		return () => {
			_isMounted = false;
		};
	}, []);

	return (
		<>
			<nav id='navbar' className='navbar navbar-expand-lg navbar-light bg-dark'>
				<div className='container'>
					<Link href='/'>
						<a className='navbar-brand'>
							<img
								src='/images/powerstone/powerstone-logo-white.png'
								alt='logo'
							/>
							<img
								src='/images/powerstone/powerstone-property-management-horizontal-logo.png'
								alt='logo'
							/>
						</a>
					</Link>

					<button
						onClick={toggleNavbar}
						className={classTwo}
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className={classOne} id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<Link href='/'>
									<a className='nav-link'>Home</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/#eservices'>
									<a className='nav-link'>Homeowner Services</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/#about'>
									<a className='nav-link'>Community News</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/#team'>
									<a className='nav-link'>Board</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/faq'>
									<a className='nav-link active'>FAQ</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/#contact'>
									<a className='nav-link'>Contact</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href={asystHref}>
									<a className='nav-link' target='_blank'>
										Login/Register
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default FAQFullNavbar;
