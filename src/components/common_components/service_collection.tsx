import ServiceCard from "./service_card";
import { useState, useEffect } from "react";
import Service from "../../classes/service";
import { useMediaQuery } from 'react-responsive';
import { SmallDescProps } from "./small_desc";
import { LargeDescProps } from "./large_desc";

interface ServiceCollectionProps {
    services: Service[];
    renderSmallServiceDesc: ({ service }: SmallDescProps) => JSX.Element;
    renderLargeServiceDesc: ({ service }: LargeDescProps) => JSX.Element;
}

function ServiceCollection({ services, renderSmallServiceDesc, renderLargeServiceDesc }: ServiceCollectionProps) {
    const [currentService, setCurrentService] = useState<Service | null>(null);
    const [contentSelected, setContentSelected] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    useEffect(() => {
        if (contentSelected) {
            setIsContentVisible(true);
            setIsExpanded(true);
        } else {
            setIsExpanded(false);
            setTimeout(() => {
                setIsContentVisible(false);
            }, 700); // This timeout should match the transition duration
        }
    }, [contentSelected]);

    const expandService = (service: Service) => {
        setCurrentService(service);
        setContentSelected(true);
    }

    const collapseService = () => {
        setContentSelected(false);
        setTimeout(() => {
            setCurrentService(null);
        }, 700); // Ensures the content is hidden before the service is cleared
    }

    const handleServiceClick = (service: Service | null) => {
        if (service) {
            expandService(service);
        } else {
            collapseService();
        }
    };

    return (
        <>
            <div className={`flex flex-col md:flex-row lg:flex-row justify-around items-center mx-4 z-20`}>
                {services.map((service) => (
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
                                className={`transition-all ease-in-out duration-700 overflow-hidden pb-5 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}
                                id="examples"
                            >
                                {isContentVisible && renderSmallServiceDesc({ service: currentService })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {!isMobile && (
                <div
                    className={`transition-all ease-in-out duration-700 overflow-hidden pb-5 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}
                    id="examples"
                >
                    {isContentVisible && renderLargeServiceDesc({ service: currentService })}
                </div>
            )}
        </>
    );
}

export default ServiceCollection;
