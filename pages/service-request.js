import Contact from "../components/Common/Contact";
import Faq from "../components/Common/Faq";
import RequestForm from "../components/Common/RequestForm";
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
            {/* <RequestForm /> */}
            <CorporateFooter />
        </>
    )
}

export default services;