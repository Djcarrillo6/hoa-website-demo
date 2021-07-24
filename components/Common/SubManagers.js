import React from 'react';

const SubManagers = () => {
	return (
		<>
			<div className='row team-member-row'>
				<div className='col-md-3'>
					<div className='single-features'>
						<div className='client-image'>
							<img
								src='/images/small-per8.png'
								className='secondary-team-img'
								alt='image'
							/>
						</div>
						<h3>Asst Manager</h3>
						<p>Team Member Info...</p>
					</div>
				</div>
				<div className='col-md-3'>
					<div className='single-features'>
						<div className='client-image'>
							<img
								src='/images/small-per6.png'
								className='secondary-team-img'
								alt='image'
							/>
						</div>
						<h3>Groundskeeper</h3>
						<p>Team Member Info...</p>
					</div>
				</div>
				<div className='col-md-3'>
					<div className='single-features'>
						<div className='client-image'>
							<img
								src='/images/small-per7.png'
								className='secondary-team-img'
								alt='image'
							/>
						</div>
						<h3>Secretary</h3>
						<p>Team Member Info...</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubManagers;
