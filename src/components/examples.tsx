import Service from "../classes/service";

interface ExamplesProps {
    service: Service | null;
}

function Examples({ service }: ExamplesProps) {
    return (
        <div className={`my-2 mx-6 transition-all duration-500 ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1>{service?.description}</h1>
            <h1>{service?.examples}</h1>
        </div>
    );
}

export default Examples;
