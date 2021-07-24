import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [asystHref] = useState(
		'https://myaccount.powerstonepm.com/_UserLogin?Mode=Register',
	);
	const [_isMounted, set_IsMounted] = useState(false);
	const classOne = collapsed
		? 'collapse navbar-collapse ipadnav'
		: 'navbar-collapse collapse show ipadnav';
	const classTwo = collapsed
		? 'navbar-toggler navbar-toggler-right collapsed'
		: 'navbar-toggler navbar-toggler-right';

	const toggleNavbar = () => {
		setCollapsed(() => !collapsed);
	};

	useEffect(() => {
		set_IsMounted(() => !_isMounted);

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
			set_IsMounted(false);
		};
	}, []);

	return (
		<>
			<nav
				id='navbar'
				className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container'>
					<Link href='/'>
						<a className='navbar-brand responsive-powerstone-logo'>
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
								<AnchorLink
									onClick={toggleNavbar}
									offset={() => 100}
									className='nav-link active'
									href='#home'>
									Home
								</AnchorLink>
							</li>
							<li className='nav-item'>
								<AnchorLink
									onClick={toggleNavbar}
									offset={() => -1}
									className='nav-link'
									href='#eservices'>
									Homeowner Services
								</AnchorLink>
							</li>
							<li className='nav-item'>
								<AnchorLink
									onClick={toggleNavbar}
									offset={() => -1}
									className='nav-link'
									href='#about'>
									Community News
								</AnchorLink>
							</li>
							<li className='nav-item'>
								<AnchorLink
									onClick={toggleNavbar}
									offset={() => -1}
									className='nav-link'
									href='#team'>
									Board
								</AnchorLink>
							</li>
							<li className='nav-item'>
								<Link href='/faqfull'>
									<a className='nav-link'>FAQ</a>
								</Link>
							</li>
							<li className='nav-item'>
								<AnchorLink
									onClick={toggleNavbar}
									offset={() => -1}
									className='nav-link'
									href='#contact'>
									Contact
								</AnchorLink>
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

export default Navbar;
