import Service from "../../classes/service";

interface ServiceDescSmallProps {
    service: Service | null;
}

function ServiceDescSmall({ service }: ServiceDescSmallProps) {
    return (
        <div className={`my-4 mx-6 transition-all duration-500 ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1 className=" text-2xl">{service?.description}</h1>
        </div>
    );
}

export default ServiceDescSmall;