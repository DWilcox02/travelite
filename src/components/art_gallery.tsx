import ExpandingGallery from "./expanding_gallery";
import GALLERY_ART_DATA from "../data/gallery_art_data.json";

function ArtGallery() {

    return (
        <div>
            <h1 className="text-3xl text-center">ART GALLERY</h1>
            <ExpandingGallery images1={GALLERY_ART_DATA[0]} images2={GALLERY_ART_DATA[1]} images3={GALLERY_ART_DATA[2]}></ExpandingGallery>
        </div>
    )
}

export default ArtGallery;