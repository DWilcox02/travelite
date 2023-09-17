import { useEffect, useState } from "react";
import Service from "../classes/service";

interface ServiceCardProps {
    service: Service;
    currentService: Service | null;
    setCurrService: (currService: Service | null) => void;
}

function ServiceCard({
    service,
    currentService,
    setCurrService,
}: ServiceCardProps) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (currentService != service) {
            setSelected(false);
        } else {
            setSelected(true);
        }
    }, [service, currentService]);

    
    function handleClick() {
        if (currentService === service) {
            setCurrService(null);
        } else {
            setCurrService(service);
        }
    }

    return (
        <div
            className={`flex flex-col bg-white bg-opacity-30 rounded-tr-3xl rounded-bl-3xl ${selected ? "md:scale-100" : "md:scale-95"} md:hover:scale-100 transition-all shadow-2xl cursor-pointer`}
            onClick={handleClick}
        >
            <img
                className="rounded-tr-3xl w-full h-64 object-cover"
                src={service.image}
                alt=""
            />
            <div className="h-full p-4">
                <h3 className="text-xl">{service.name.toLocaleUpperCase()}</h3>
            </div>
        </div>
    );
}

export default ServiceCard;
