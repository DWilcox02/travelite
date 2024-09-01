import { SmallDescProps } from "../common_components/small_desc";

function PetDescLarge({ service }: SmallDescProps) {
    return (
        <div className={`my-4 mx-6 transition-all ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1 className=" text-2xl">{service?.description}</h1>
            <div className="flex flex-row overflow-x-scroll gap-4">
                {service?.examples.map((example, index) => (
                    <img key={index} className=" rounded-lg mx-auto max-h-[32rem] w-auto" src={example} alt="" />
                ))}
            </div>
        </div>
    );
}

export default PetDescLarge
