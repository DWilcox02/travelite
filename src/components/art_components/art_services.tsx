import { Heading2 } from "../common_components/headings";
import ServiceCard from "./service_card";
import MOCK_SERVICES from "../../data/art_service_data.json";
import { useState, useEffect } from "react";
import ServiceDescLarge from "./service_desc_large";
import ServiceDescSmall from "./service_desc_small";
import { Collapse, initTE } from "tw-elements";
import Service from "../../classes/service";
import { useMediaQuery } from 'react-responsive';

function ArtServices() {
    const [currentService, setCurrentService] = useState<Service | null>(null);
    const [contentSelected, setContentSelected] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    initTE(Collapse);

    useEffect(() => {
        if (contentSelected) {
            setIsContentVisible(true);  // Show content immediately
            setIsExpanded(true);
        } else {
            setIsExpanded(false);  // Start collapsing the component
        }
    }, [contentSelected]);

    const expandService = (service: Service) => {
        setCurrentService(service);
        setContentSelected(true);
    }

    const collapseService = () => {
        setContentSelected(false);
        setTimeout(() => {
            setIsContentVisible(false);
            setCurrentService(null);
        }, 700);
    }

    const handleServiceClick = (service: Service | null) => {
        if (service) {
            expandService(service);
        } else {
            collapseService();
        }
    };

    return (
        <div className={`w-full flex flex-col p-4 transition-all duration-700`}>
            <div
                className={`rounded-md bg-white bg-opacity-30 transition-all duration-700 pb-5}`}
            >
                <Heading2 text="Art Services" colour="black"></Heading2>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row justify-between items-center gap-4 mx-4 z-20`}>
                    {MOCK_SERVICES.map((service) => (
                        <div key={service.id}>
                            <div className="z-30">
                                <ServiceCard
                                    service={service}
                                    currentService={currentService}
                                    setCurrService={handleServiceClick}
                                ></ServiceCard>
                            </div>
                            {isMobile && currentService?.id === service.id && (
                                <div
                                    className={`transition-all ease-in-out duration-700 overflow-hidden ${isExpanded ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}
                                    style={{ maxHeight: isExpanded ? '500px' : '0px' }}
                                    id="examples"
                                >
                                    {isContentVisible && (
                                        <ServiceDescSmall service={currentService}></ServiceDescSmall>
                                    )}
                                </div>)}
                        </div>
                    ))}
                </div>
                {!isMobile && (
                    <div
                        className={`transition-all ease-in-out duration-700 overflow-hidden ${isExpanded ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}
                        style={{ maxHeight: isExpanded ? '500px' : '0px' }}
                        id="examples"
                    >
                        {isContentVisible && (
                            <ServiceDescLarge service={currentService}></ServiceDescLarge>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ArtServices;
