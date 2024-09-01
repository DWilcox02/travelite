import { SmallDescProps } from "../common_components/small_desc";

function ArtDescSmall({ service }: SmallDescProps) {
    return (
        <div className={`my-4 mx-6 transition-all ${service ? "opacity-100" : "opacity-0"}`}>
            <hr />
            <h1 className=" text-2xl">{service?.description}</h1>
        </div>
    );
}

export default ArtDescSmall
