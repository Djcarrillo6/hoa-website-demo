import React from 'react';
import Link from 'next/link';

const CommunityBoard = () => {
	const openTabSection = (evt, tabName) => {
		let i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName('tabs_item');
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = 'none';
		}

		tablinks = document.getElementsByTagName('li');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace('current', '');
		}

		document.getElementById(tabName).style.display = 'block';
		evt.currentTarget.className += 'current';
	};

	return (
		<section id='announcements' className='why-we-different ptb-100 bg-image'>
			<div className='container'>
				<div className='section-title'>
					<span>Community Announcement Board</span>
					<h2>
						Latest News at <b>Shorecliff Villages</b>
					</h2>
					<p>
						Stay informed on the latest events & information of your community!
					</p>
				</div>

				<div className='row'>
					<div className='col-lg-12 col-md-12'>
						<div className='tab'>
							{/* Tabs Nav */}
							<ul className='tabs'>
								<li
									className='current'
									onClick={(e) => openTabSection(e, 'tab1')}>
									<span>City Girls Softball</span>
								</li>
								<li onClick={(e) => openTabSection(e, 'tab2')}>
									<span>City Little League</span>
								</li>
								<li onClick={(e) => openTabSection(e, 'tab3')}>
									<span>Elite Soccer</span>
								</li>
								<li onClick={(e) => openTabSection(e, 'tab4')}>
									<span>ANHS Basketball</span>
								</li>
							</ul>

							<div className='tab_content'>
								{/* Tabs Item 01 */}
								<div id='tab1' className='tabs_item'>
									<div className='row align-items-center'>
										<div className='col-lg-6 col-md-12 why-we-different-content'>
											<div className='tabs_item_content'>
												<h3>City Girls Softball</h3>
												<p>
													AVGS meets at the Aliso Viejo Community Park and has
													teams for girls 6U thru 14U. They offer Spring, Fall
													and All-Star seasons to girls primarily from cities in
													South Orange County. AVGS was able to officially start
													their season on March 20. Gregory Kinder, Board Vice
													President & Community Director spoke about getting
													this season up and running. “During COVID, we tried to
													maintain as many programs as possible throughout the
													year. We held practices, camps and clinics to keep up
													the momentum for the girls.”
												</p>
												<Link href='#'>
													<a className='btn btn-primary'>Details</a>
												</Link>
											</div>
										</div>

										<div className='col-lg-6 col-md-12 why-we-different-img'>
											<div className='tabs_item_img'>
												<img src='/images/base-mound.jpg' alt='img' />
											</div>
										</div>
									</div>
								</div>

								{/* Tabs Item 02 */}
								<div id='tab2' className='tabs_item'>
									<div className='row align-items-center'>
										<div className='col-lg-6 col-md-12 why-we-different-img'>
											<div className='tabs_item_img'>
												<img src='/images/baseball.jpg' alt='img' />
											</div>
										</div>

										<div className='col-lg-6 col-md-12 why-we-different-content'>
											<div className='tabs_item_content'>
												<h3>City Little League</h3>
												<p>
													AVLL is another 100% volunteer organization that has
													been training baseball players for 30 years. The
													league plays at Woodfield & Pinewood parks and has
													children girls ages 4-14. Last summer and fall, they
													provided camps and clinics for players, and this year,
													games started on March 20. VP of Baseball Operations,
													Ryan Johnson, was one of 25 Volunteer Board Members
													who worked hard to prepare the league for the
													reopening.
												</p>
												<Link href='#'>
													<a className='btn btn-primary'>Details</a>
												</Link>
											</div>
										</div>
									</div>
								</div>

								{/* Tabs Item 03 */}
								<div id='tab3' className='tabs_item'>
									<div className='row align-items-center'>
										<div className='col-lg-6 col-md-12 why-we-different-content'>
											<div className='tabs_item_content'>
												<h3>Elite Soccer</h3>
												<p>
													ccording to founder Mike Affleck, the league was
													created to allow kids to play soccer with their
													friends. For ages 4-14, the league has grown steadily
													since 2006, with a current membership of 140 teams in
													South Orange County. “Friendships are just as
													important, often more important than the soccer. We
													encourage the kids to be on teams with their buddies,
													and we work hard to curate the game schedule to keep
													it fair and competitive between teams,” says Mr.
													Affleck.
												</p>
												<Link href='#'>
													<a className='btn btn-primary'>Details</a>
												</Link>
											</div>
										</div>

										<div className='col-lg-6 col-md-12 why-we-different-img'>
											<div className='tabs_item_img'>
												<img src='/images/soccer.jpg' alt='img' />
											</div>
										</div>
									</div>
								</div>

								{/* Tabs Item 04 */}
								<div id='tab4' className='tabs_item'>
									<div className='row align-items-center'>
										<div className='col-lg-6 col-md-12 why-we-different-img'>
											<div className='tabs_item_img'>
												<img src='/images/basketball.jpg' alt='img' />
											</div>
										</div>

										<div className='col-lg-6 col-md-12 why-we-different-content'>
											<div className='tabs_item_content'>
												<h3>ANHS Basketball</h3>
												<p>
													James Buccheri, Director & Head Coach of the OC
													Scorpions and an ANHS baseball coach, works hard every
													day to provide professional-level training to his
													players. “Our goal is to get them acclimated to the
													travel ball and gradually prepare them for High School
													and then onto college and professional ball.”
												</p>
												<Link href='#'>
													<a className='btn btn-primary'>Details</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommunityBoard;
