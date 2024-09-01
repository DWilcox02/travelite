import Service from "../../classes/service";

interface ExamplesProps {
    service: Service | null;
}

function Examples({ service }: ExamplesProps) {
    return (
        <div className={`my-2 mx-6 transition-all duration-500 ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1>{service?.description}</h1>
            {service && <div className="flex flex-col sm:flex-row w-full">
                {service?.examples.map((example) => (
                    <div key={example} className=" border-2 border-red-500 mx-auto">
                        <img
                            className="rounded-md h-64"
                            src={example}
                            alt=""
                        />
                    </div>
                ))}
            </div>}
        </div>
    );
}

export default Examples;
