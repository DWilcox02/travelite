import { Carousel } from "flowbite-react";
import experiencesData from "../data/experience_data.json";
import ExperienceCard from "./experience_card";
import { Heading1 } from "./headings";

function ExperiencePage() {
    const items = experiencesData.map((data) => {
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
            <div className="m-4 p-4 rounded-md bg-white bg-opacity-30">
                <Heading1 text="My Experiences" colour="black"></Heading1>
                <div className="w-full flex items-center justify-center h-2/3">
                    <Carousel>{items}</Carousel>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;
