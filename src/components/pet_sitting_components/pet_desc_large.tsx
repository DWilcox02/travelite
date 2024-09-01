import { SmallDescProps } from "../common_components/small_desc";

function PetDescLarge({ service }: SmallDescProps) {
    return (
        <div className={`my-4 mx-6 transition-all ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1 className=" text-2xl">{service?.description}</h1>
            <img className="mx-auto max-h-[32rem] w-auto" src={service?.image} alt="" />
        </div>
    );
}

export default PetDescLarge
