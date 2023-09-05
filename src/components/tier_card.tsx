import { Tier } from "../classes/tier";

interface TierCardProps {
    tier: Tier;
}

function TierCard({ tier }: TierCardProps) {
    return (
        <div className="flex flex-col text-center mt-2 rounded-md bg-white bg-opacity-100 p-4">
            <h3 className="text-xl">{tier.name}</h3>
            <h4>${tier.price.toLocaleString()}</h4>
            <hr />
            <p className="py-4">{tier.description}</p>
        </div>
    );
}

export default TierCard;
