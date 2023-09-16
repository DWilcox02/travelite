import Home from "./home";
import ExperiencePage from "./experience_page";
// import AboutPage from "./about_page";
import ServicesPage from "./services_page";
import Inquiry from "./inquiries";
import ThankYou from "./thank_you";
import ReviewsPage from "./reviews_page";
import ArtGallery from "./art_gallery";
import { useEffect, useRef } from "react";


interface PageContainerProps {
    setTravelSection: () => void;
    setArtSection: () => void;
}

function PageContainer({setTravelSection, setArtSection}: PageContainerProps) {
    const artRef = useRef(null);
    

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries; // first and only entry
        if (entry.isIntersecting) {
            setArtSection();
            
        } else {
            setTravelSection();
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction);
        if (artRef.current) {
            observer.observe(artRef.current);
        }

        return () => {
            if (artRef.current) {
                observer.unobserve(artRef.current);
            }
        }
    }, [artRef]);

    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home></Home>
            <ServicesPage></ServicesPage>
            <ExperiencePage></ExperiencePage>
            <ReviewsPage></ReviewsPage>
            <Inquiry></Inquiry>
            <div ref={artRef}>
                <ArtGallery></ArtGallery>
                <ThankYou></ThankYou>
            </div>
        </div>
    );
}

export default PageContainer;
