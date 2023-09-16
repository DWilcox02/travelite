import { Heading2 } from "./headings";

function AboutPage() {
    return (
        <div className="w-full flex flex-col py-4">
            <div className="m-4 p-4 bg-white bg-opacity-30 rounded-md text-black">
                <Heading2 text="About Me..." colour="black"></Heading2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer at metus ultricies, vulputate felis nec, tincidunt
                    diam. Pellentesque a nisl sed purus lobortis pulvinar. Sed
                    eget dui dolor. Sed quis aliquam turpis. Nunc at augue
                    condimentum, elementum diam gravida, scelerisque nibh. Etiam
                    efficitur placerat vehicula. Etiam tincidunt, mi suscipit
                    lobortis pharetra, est arcu vestibulum arcu, eget placerat
                    mi risus et mauris. Vestibulum ut faucibus ante.
                    <br />
                    Integer tristique dolor ac pharetra sagittis. Aenean in dui
                    dolor. Mauris convallis ut sapien euismod fermentum. Fusce
                    malesuada mollis pharetra. Vivamus pretium dolor at leo
                    rhoncus mollis. Nam ac neque et eros vestibulum laoreet.
                    Praesent tincidunt nulla quis facilisis fermentum. Proin
                    risus augue, auctor sit amet feugiat interdum, malesuada
                    vehicula mauris. Ut sem risus, sollicitudin id consequat sit
                    amet, consectetur at tortor. Mauris porta, est nec aliquet
                    iaculis, ante libero porta tortor, at imperdiet eros sem sit
                    amet magna. Curabitur laoreet metus id metus sodales, non
                    pulvinar urna aliquet.
                    <br />
                    Nunc auctor dui sit amet odio sagittis, ut ullamcorper felis
                    cursus. Nam laoreet enim sit amet vestibulum elementum.
                    Curabitur vel ipsum eu metus suscipit eleifend. Donec
                    vestibulum sollicitudin pulvinar. Etiam tellus quam,
                    hendrerit eget orci at, semper ullamcorper tortor. Donec ut
                    tortor eu ex tristique maximus et in est. Quisque cursus
                    scelerisque iaculis. Morbi mauris tortor, pretium vel
                    volutpat et, commodo at lectus. Quisque interdum hendrerit
                    ante ut malesuada. Proin accumsan massa sed dictum semper.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
