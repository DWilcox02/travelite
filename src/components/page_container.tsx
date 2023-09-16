import Home from "./home";
import ExperiencePage from "./experience_page";
// import AboutPage from "./about_page";
import ServicesPage from "./services_page";
import Inquiry from "./inquiries";
import ThankYou from "./thank_you";

function PageContainer() {
    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home></Home>
            <ServicesPage></ServicesPage>
            <ExperiencePage></ExperiencePage>
            <Inquiry></Inquiry>
            <ThankYou></ThankYou>
        </div>
    );
}

export default PageContainer;
