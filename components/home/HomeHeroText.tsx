import Video from "./Video";

const HomeHeroText = () => {
    return (
        <div className="font-myfont font-light p-5 lg:text-center flex flex-col justify-center text-white pt-[10vh]">
            <div className=" text-[6vw] justify-center flex items-center uppercase leading-[8.5vw]">
                The spark for
            </div>
            <div className="text-[6vw] justify-center flex items-center uppercase leading-[8.5vw]">
                all
                <div className="h-[5vw] w-[11vw] rounded-full overflow-hidden mx-2 -mt-3">
                    <Video></Video>
                </div>
                things
            </div>
            <div className="text-[6vw] justify-center flex items-center uppercase leading-[8.5vw]">
                creative
            </div>
        </div>
    );
};

export default HomeHeroText;
