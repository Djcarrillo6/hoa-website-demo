import { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import VideoBanner from '../components/PageBanners/VideoBanner';
import EServices from '../components/Common/EServices';
import AboutUs from '../components/Common/AboutUs';
import Board from '../components/Common/Board';
import ManagerHighlight from '../components/Common/ManagerHighlight';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Contact from '../components/Common/Contact';
import CorporateFooter from '../components/Layouts/CorporateFooter';
import FAQ from '../components/Common/Faq';

class Index extends Component {
	render() {
		return (
			<>
				<Navbar />
				<VideoBanner />
				<EServices />
				<AboutUs />
				<Board />
				<ManagerHighlight />
				<FAQ />
				<CtaAreaTwo />
				<Contact />
				<CorporateFooter />
			</>
		);
	}
}

export default Index;
