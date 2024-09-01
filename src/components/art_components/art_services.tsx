import { Heading2 } from "../headings";
import ServiceCard from "./service_card";
import MOCK_SERVICES from "../../data/art_service_data.json";
import { useState } from "react";
import Examples from "./examples";
import { Collapse, initTE } from "tw-elements";
import Service from "../../classes/service";
import { useMediaQuery } from 'react-responsive';

function ArtServices() {
    const [currentService, setCurrentService] = useState<Service | null>(null);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    initTE(Collapse);
    return (
        <div className={`w-full flex flex-col p-4 transition-all duration-500`}>
            <div
                className={`rounded-md bg-white bg-opacity-30 transition-all duration-500 ${!currentService ? "pb-2" : "pb-5"}`}
            >
                <Heading2 text="Art Services" colour="black"></Heading2>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row justify-between items-center gap-4 mx-4 z-20`}>
                    {MOCK_SERVICES.map((service) => (
                        <div key={service.id}>
                            <div
                                className="z-30"
                            >
                                <ServiceCard
                                    service={service}
                                    currentService={currentService}
                                    setCurrService={setCurrentService}
                                ></ServiceCard>
                                <div
                                    className={`transition-all duration-150 ease-in-out`}
                                    id="examples"
                                >
                                    {isMobile && currentService != null && currentService.id == service.id && <Examples service={currentService}></Examples>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={`transition-all duration-150 ease-in-out`}
                    id="examples"
                >
                    {!isMobile && currentService != null && <Examples service={currentService}></Examples>}
                </div>
            </div>
        </div>
    );
}

export default ArtServices;
