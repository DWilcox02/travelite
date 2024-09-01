import Service from "../../classes/service";

interface ExamplesProps {
    service: Service | null;
}

function Examples({ service }: ExamplesProps) {
    return (
        <div className={`my-4 mx-6 transition-all duration-500 ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1 className=" text-2xl">{service?.description}</h1>
            <img className="mx-auto max-h-[32rem] w-auto" src={service?.image} alt="" />
        </div>
    );
}

export default Examples;
