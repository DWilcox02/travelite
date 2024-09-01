import { Heading2 } from "../common_components/headings"
import PET_SERVICES from "../../data/pet_service_data.json"
import ServiceCollection from "../common_components/service_collection"
import PetDescSmall from "./pet_desc_small"
import PetDescLarge from "./pet_desc_large"

function PetSittingServices() {
    return (
        <div className={`w-full flex flex-col p-4 transition-all duration-700`}>
            <div
                className={`rounded-md bg-white bg-opacity-30 transition-all duration-700 pb-5}`}
            >
                <Heading2 text="Pet Sitting Services" colour="black"></Heading2>
                <ServiceCollection services={PET_SERVICES} renderSmallServiceDesc={PetDescSmall} renderLargeServiceDesc={PetDescLarge}></ServiceCollection>
            </div>
        </div>
    )
}

export default PetSittingServices