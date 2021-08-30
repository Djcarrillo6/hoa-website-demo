import Contact from "../components/Common/Contact";
import ServiceRequestForm from "../components/Common/ServiceRequestForm";
import CorporateFooter from "../components/Layouts/CorporateFooter";
import Navbar from "../components/Layouts/Navbar";
import VideoBanner from "../components/PageBanners/VideoBanner";

const services = () => {
    return (
        <>
            <Navbar />
            <VideoBanner />
            <ServiceRequestForm />
            <CorporateFooter />
        </>
    )
}

export default services;