import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class StillNavbar extends Component {
	state = {
		collapsed: true,
		asystHref: 'https://myaccount.powerstonepm.com/_UserLogin?Mode=Register',
	};

	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	componentDidMount() {
		this._isMounted = true;
		let elementId = document.getElementById('navbar');
		document.addEventListener('scroll', () => {
			if (window.scrollY > 170) {
				elementId.classList.add('is-sticky');
			} else {
				elementId.classList.remove('is-sticky');
			}
		});
		window.scrollTo(0, 0);
		// this.menuActiveClass()
	}

	// ! Causes Bug In Navbar
	// menuActiveClass = () => {
	//     let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
	//     window.addEventListener("scroll", () => {
	//         let fromTop = window.scrollY;
	//         mainNavLinks.forEach(link => {
	//             if (link.hash){
	//                 let section = document.querySelector(link.hash);
	//                 if (
	//                     section.offsetTop <= fromTop &&
	//                     section.offsetTop + section.offsetHeight > fromTop
	//                 ) {
	//                     link.classList.add("active");
	//                 } else {
	//                     link.classList.remove("active");
	//                 }
	//             }
	//         });
	//     });
	// }

	render() {
		const { collapsed } = this.state;
		const classOne = collapsed
			? 'collapse navbar-collapse'
			: 'navbar-collapse collapse show';
		const classTwo = collapsed
			? 'navbar-toggler navbar-toggler-right collapsed'
			: 'navbar-toggler navbar-toggler-right';
		return (
			<>
				<nav
					id='navbar'
					className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container'>
						<Link href='/index2'>
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
							onClick={this.toggleNavbar}
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
										onClick={this.toggleNavbar}
										offset={() => 100}
										className='nav-link active'
										href='#home'>
										Home
									</AnchorLink>
								</li>
								<li className='nav-item'>
									<AnchorLink
										onClick={this.toggleNavbar}
										offset={() => -1}
										className='nav-link'
										href='#eservices'>
										E-Services
									</AnchorLink>
								</li>
								{/* <li className='nav-item'>
									<AnchorLink
										onClick={this.toggleNavbar}
										offset={() => -1}
										className='nav-link'
										href='/index2/#about'>
										Events
									</AnchorLink>
								</li>
								<li className='nav-item'>
									<AnchorLink
										onClick={this.toggleNavbar}
										offset={() => -1}
										className='nav-link'
										href='/index2/#announcements'>
										Announcements
									</AnchorLink>
								</li> */}
								<li className='nav-item'>
									<AnchorLink
										onClick={this.toggleNavbar}
										offset={() => -1}
										className='nav-link'
										href='#team'>
										Board
									</AnchorLink>
								</li>
								<li className='nav-item'>
									<Link href='/faqfull2'>
										<a className='nav-link'>FAQ</a>
									</Link>
								</li>
								{/* <li className='nav-item'>
									<AnchorLink
										onClick={this.toggleNavbar}
										offset={() => -1}
										className='nav-link'
										href='#contact'>
										Contact
									</AnchorLink>
								</li> */}
								<li className='nav-item'>
									<Link href={this.state.asystHref}>
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
	}
}

export default StillNavbar;
