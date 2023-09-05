import TierCard from "./tier_card";
import MOCK_TIERS from "../data/tier_data.json";
import { Heading1 } from "./headings";

function TiersPage() {
    return (
        <div className="w-full flex flex-col">
            <div className="m-4 border-2 border-gray-400 rounded-md">
                <div className="px-4 py-2 bg-white bg-opacity-30 rounded-tl-md rounded-tr-md">
                    <Heading1 text="Tiers" colour="black"></Heading1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <TierCard tier={MOCK_TIERS[0]}></TierCard>
                    <TierCard tier={MOCK_TIERS[1]}></TierCard>
                    <TierCard tier={MOCK_TIERS[2]}></TierCard>
                </div>
            </div>
        </div>
    );
}

export default TiersPage;
