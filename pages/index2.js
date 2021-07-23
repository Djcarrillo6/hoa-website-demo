import React from 'react';
import StillNavbar from '../components/Layouts/StillNavbar';
import StillBanner from '../components/PageBanners/StillBanner';
import EServices from '../components/Common/EServices';
import Board from '../components/Common/Board';
import ManagerHighlight from '../components/Common/ManagerHighlight';
import Footer from '../components/Layouts/Footer';
import FAQ from '../components/Common/FAQ';

const Index2 = () => {
	return (
		<>
			<StillNavbar />
			<StillBanner />
			<EServices />
			<Board />
			<ManagerHighlight />
			<FAQ />
			<Footer />
		</>
	);
};

export default Index2;
