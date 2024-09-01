
interface HomeImageProps {
    source: string;
}

function HomeImage({ source }: HomeImageProps) {
    return (
        <div className="w-72">
            <img className=" rounded-2xl shadow-2xl" src={source} alt="" />
        </div>
    )
}

export default HomeImage