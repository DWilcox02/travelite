import { Heading2 } from "../common_components/headings";
import ART_SERVICES from "../../data/art_service_data.json";
import ServiceCollection from "../common_components/service_collection";
import ArtDescSmall from "./art_desc_small";
import ArtDescLarge from "./art_desc_large";

function ArtServices() {

    return (
        <div className={`w-full flex flex-col p-4 transition-all duration-700`}>
            <div
                className={`rounded-md bg-white bg-opacity-30 transition-all duration-700 pb-5}`}
            >
                <Heading2 text="Art Services" colour="black"></Heading2>
                <ServiceCollection services={ART_SERVICES} renderSmallServiceDesc={ArtDescSmall} renderLargeServiceDesc={ArtDescLarge}></ServiceCollection>
            </div>
        </div>
    );
}

export default ArtServices;
