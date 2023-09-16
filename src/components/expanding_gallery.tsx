import { useState } from "react";

interface Image {
    id: number;
    src: string;
    alt: string;
}

interface ExpandingGalleryProps {
    images1: Image[];
    images2: Image[];
    images3: Image[];
}

interface ImageColumnProps {
    images: Image[];
    openImage: (image: Image) => void;
}

interface ImageCardProps {
    image: Image;
    openImage: (image: Image) => void;
}

function ImageCard({ image, openImage }: ImageCardProps) {
    return (
        <div key={image.id} className="py-2">
            <img
                src={image.src}
                alt={image.alt}
                className="max-h-96 rounded-md transition-all scale-90 hover:scale-100 cursor-pointer"
                onClick={() => openImage(image)}
            />
        </div>
    );
}

function ImageColumn({ images, openImage }: ImageColumnProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            {images.map((image) => (
                <ImageCard image={image} openImage={openImage}></ImageCard>
            ))}
        </div>
    );
}

function ExpandingGallery({
    images1,
    images2,
    images3,
}: ExpandingGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openImage = (image: Image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ImageColumn
                    images={images1}
                    openImage={openImage}
                ></ImageColumn>
                <ImageColumn
                    images={images2}
                    openImage={openImage}
                ></ImageColumn>
                <ImageColumn
                    images={images3}
                    openImage={openImage}
                ></ImageColumn>

                {selectedImage && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-all">
                        <div className="max-w-3xl bg-white p-4 rounded-lg mx-2">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-auto max-h-[32rem]"
                            />
                            <button
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer transition-all"
                                onClick={closeImage}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
    );
}

export default ExpandingGallery;
