import { Carousel } from "flowbite-react";
import EXPERIENCE_DATA from "../data/experience_data.json";
import ExperienceCard from "./experience_card";
import { Heading2 } from "./headings";

function ExperiencePage() {
    const items = EXPERIENCE_DATA.map((data) => {
        return (
            <ExperienceCard
                title={data.title}
                key={data.key.toString()}
                image={data.image}
                description={data.description}
            ></ExperienceCard>
        );
    });

    return (
        <div className="w-full flex-col py-4">
            <Heading2 text="My Travel Experiences" colour="black"></Heading2>
            <div className="w-full flex items-center justify-center px-4 pb-4">
                <Carousel className="h-full">{items}</Carousel>
            </div>
        </div>
    );
}

export default ExperiencePage;
