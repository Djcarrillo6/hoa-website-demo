import React, { Component } from 'react';

class VideoBanner extends Component {
	state = {
		isOpen: false,
	};
	openModal = () => {
		this.setState({ isOpen: true });
	};

	render() {
		return (
			<>
				<div id='home' className='main-banner video-banner'>
					<div className='video-background'>
						<video autoPlay muted loop src='/video/hoa1.mp4' />
					</div>
					<div className='d-table'>
						<div className='d-table-cell'>
							<div className='container'>
								<div className='main-banner-content text-center'>
									<span>Welcome To</span>
									<h1>
										Los Villas de <b>Vista Mariposa</b>
									</h1>
									<h4 style={{color: '#ffffff'}}>Powerstone Property Management</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default VideoBanner;
