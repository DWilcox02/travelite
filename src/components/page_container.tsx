import Home from "./home";
import ExperiencePage from "./experience_page";
// import AboutPage from "./about_page";
import TravelServices from "./travel_services";
import ReviewsAndInquiries from "./reviews_and_inquiries";
import ThankYou from "./thank_you";
import ArtGallery from "./art_gallery";
import { useEffect, useRef } from "react";
import ArtServices from "./art_services";

interface PageContainerProps {
    setTravelSection: () => void;
    setArtSection: () => void;
}

function PageContainer({
    setTravelSection,
    setArtSection,
}: PageContainerProps) {
    const artRef = useRef(null);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries; // first and only entry
        if (entry.isIntersecting) {
            setArtSection();
        } else {
            setTravelSection();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction);
        if (artRef.current) {
            observer.observe(artRef.current);
        }

        return () => {
            if (artRef.current) {
                observer.unobserve(artRef.current);
            }
        };
    }, [artRef]);

    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home></Home>
            <TravelServices></TravelServices>
            <ExperiencePage></ExperiencePage>
            <div ref={artRef}>
                <ArtServices></ArtServices>
                <ArtGallery></ArtGallery>
                <ReviewsAndInquiries></ReviewsAndInquiries>
                <ThankYou></ThankYou>
            </div>
        </div>
    );
}

export default PageContainer;
