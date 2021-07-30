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
						<video autoPlay muted loop playsinline="true" disablePictureInPicture="true" src='/video/hoa1.mp4' />
					</div>
					<div className='d-table'>
						<div className='d-table-cell'>
							<div className='container'>
								<div className='main-banner-content text-center'>
									<span>Welcome To</span>
									<h1>
										The Shorecliff Villages
									</h1>
									<h6>a</h6>
										<h4>Powerstone Property Management</h4>
									<h6>community</h6>
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
