import ComponentCarousel from "./component_carousel";
import experiencesData from "../data/experience_data.json";
import ExperienceCard from "./experience_card";

function ExperiencePage() {

    const experiences = experiencesData.map(data => {
        return <ExperienceCard title={data.title} key={data.key} image={data.image} description={data.description}></ExperienceCard>
    })

    return (
        <div className="w-full flex items-center justify-center h-2/3">
            <ComponentCarousel slides={experiences}></ComponentCarousel>
        </div>
    )
}

export default ExperiencePage;