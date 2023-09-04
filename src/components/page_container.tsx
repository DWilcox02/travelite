import Home from "./home";
import ExperiencePage from "./experience_page";
import AboutPage from "./about_page";

function PageContainer() {
    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home></Home>
            <ExperiencePage></ExperiencePage>
            <AboutPage></AboutPage>
        </div>
    );
}

export default PageContainer;
