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
    const artRef = useRef<HTMLDivElement>(null);
    const travelRef = useRef<HTMLDivElement>(null);

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
        if (travelRef.current) {
            observer.observe(travelRef.current);
        }

        return () => {
            if (travelRef.current) {
                observer.unobserve(travelRef.current);
            }
        };
    }, [travelRef]);

    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home artId={artRef} travelId={travelRef}></Home>
            <div ref={artRef}>
                <ArtServices></ArtServices>
                <ArtGallery></ArtGallery>
            </div>
            <div ref={travelRef}>
                <TravelServices></TravelServices>
                <ExperiencePage></ExperiencePage>
                <ReviewsAndInquiries></ReviewsAndInquiries>
            <ThankYou></ThankYou>
            </div>
        </div>
    );
}

export default PageContainer;
