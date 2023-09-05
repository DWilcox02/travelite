import Home from "./home";
import ExperiencePage from "./experience_page";
import AboutPage from "./about_page";
import TiersPage from "./tiers_page";
import Inquiry from "./inquiries";
import Contact from "./contact";
import ThankYou from "./thank_you";

function PageContainer() {
    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home></Home>
            <ExperiencePage></ExperiencePage>
            <AboutPage></AboutPage>
            <TiersPage></TiersPage>
            <Inquiry></Inquiry>
            <Contact></Contact>
            <ThankYou></ThankYou>
        </div>
    );
}

export default PageContainer;
