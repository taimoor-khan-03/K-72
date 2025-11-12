import Video from "./Video";

const HomeHeroText = () => {
    return (
        <div className="font-myfont font-light p-5 text-center">
            <div className="text-[7vw] justify-center flex items-center uppercase leading-[8.5vw]">
                The spark for
            </div>
            <div className="text-[7vw] justify-center flex items-center uppercase leading-[8.5vw]">
                all
                <div className="h-[5vw] w-[11vw] rounded-full overflow-hidden mx-2 -mt-3">
                    <Video></Video>
                </div>
                things
            </div>
            <div className="text-[7vw] justify-center flex items-center uppercase leading-[8.5vw]">
                creative
            </div>
        </div>
    );
};

export default HomeHeroText;
