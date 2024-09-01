/* eslint-disable react-hooks/exhaustive-deps */
import Home from "./home_other/home";
// import AboutPage from "./about_page";
import ThankYou from "./home_other/thank_you";
import ArtGallery from "./art_components/art_gallery";
import { useEffect, useRef } from "react";
import ArtServices from "./art_components/art_services";
import ReviewsAndInquiries from "./reviews_inquiries/reviews_and_inquiries";

interface PageContainerProps {
    setPetSitting: () => void;
    setArtSection: () => void;
}

function PageContainer({
    setPetSitting: setPetSittingSection,
    setArtSection,
}: PageContainerProps) {
    const artRef = useRef<HTMLDivElement>(null);
    const petSittingRef = useRef<HTMLDivElement>(null);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries; // first and only entry
        if (entry.isIntersecting) {
            setArtSection();
        } else {
            setPetSittingSection();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction);
        if (petSittingRef.current) {
            observer.observe(petSittingRef.current);
        }

        return () => {
            if (petSittingRef.current) {
                observer.unobserve(petSittingRef.current);
            }
        };
    }, [petSittingRef]);

    return (
        <div className="overflow-y-scroll bg-white bg-opacity-50 h-full w-full rounded-lg">
            <Home artId={artRef} travelId={petSittingRef}></Home>
            <div ref={artRef}>
                <ArtServices></ArtServices>
                <ArtGallery></ArtGallery>
            </div>
            <ReviewsAndInquiries></ReviewsAndInquiries>
            <ThankYou></ThankYou>
        </div>
    );
}

export default PageContainer;
