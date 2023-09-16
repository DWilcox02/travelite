import { Service } from "../classes/service";

interface ServiceCardProps {
    service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="flex flex-col bg-white bg-opacity-30 rounded-tr-3xl rounded-bl-3xl md:scale-95 md:hover:scale-100 transition-all shadow-2xl">
            <img
                className="rounded-tr-3xl w-full h-64 object-cover"
                src={service.image}
                alt=""
            />
            <div className="h-full p-4">
                <h3 className="text-xl">{service.name.toLocaleUpperCase()}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
