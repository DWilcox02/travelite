import ExpandingGallery from "./expanding_gallery";
import GALLERY_ART_DATA from "../../data/gallery_art_data.json";
import { Heading2 } from "../headings";

function ArtGallery() {

    return (
        <div>
            <Heading2 text="ART GALLERY" colour="black"></Heading2>
            <ExpandingGallery images1={GALLERY_ART_DATA[0]} images2={GALLERY_ART_DATA[1]} images3={GALLERY_ART_DATA[2]}></ExpandingGallery>
        </div>
    )
}

export default ArtGallery;