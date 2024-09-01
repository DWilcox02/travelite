import { Heading2 } from "../headings";
import ServiceCard from "./service_card";
import MOCK_SERVICES from "../../data/art_service_data.json";
import { useState, useEffect } from "react";
import Examples from "./examples";
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
            setTimeout(() => {
                setIsExpanded(true);  // Expand the component smoothly
            }, 50);  // Small delay to ensure transition triggers correctly
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
        }, 600);
    }

    const handleServiceClick = (service: Service | null) => {
        if (service) {
            expandService(service);
        } else {
            collapseService();
        }
    };

    return (
        <div className={`w-full flex flex-col p-4 transition-all duration-500`}>
            <div
                className={`rounded-md bg-white bg-opacity-30 transition-all duration-500 pb-5}`}
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
                        </div>
                    ))}
                </div>
                {!isMobile && (
                    <div
                        className={`transition-all duration-700 ease-in-out overflow-hidden mb-5 ${isExpanded ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}
                        style={{ maxHeight: isExpanded ? '500px' : '0px' }}
                        id="examples"
                    >
                        {isContentVisible && (
                            <Examples service={currentService}></Examples>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ArtServices;
