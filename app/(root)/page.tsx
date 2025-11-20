import HomeBottomText from "@/components/home/HomeBottomText";
import HomeHeroText from "@/components/home/HomeHeroText";
import Video from "@/components/home/Video";
import MontrealTime from "@/components/Montreal";
const HomePage = () => {
    return (
        <div className="">
            <div className="h-screen w-screen fixed">
                <Video />
            </div>
            <div className="h-screen w-screen relative flex overflow-hidden pb-5 flex-col justify-between pt-[20vh] xl:pt-0">
                <HomeHeroText />
                <HomeBottomText />


                <div className="absolute  w-[29vw] h-[30vh] top-[51.5vh] lg:top-[52vh] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                        viewBox="0 0 302.71875 70.640625"
                        className="transition-all duration-0 animate-ellipse w-full h-full"
                    >
                        <ellipse
                            cx="151.359375"
                            cy="30.300"
                            rx="149.359375"
                            ry="28.8203125"
                            stroke="#D3FD50"
                            fill="transparent"
                            strokeWidth="1"
                        />
                    </svg>
                </div>

            </div>
            {/* <div className="absolute text-xs w-45 lg:max-w-xs  right-0 lg:bottom-1/3 bottom-1/4 text-white">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      </div> */}
            <div className="absolute flex text-xl lg:text-3xl w-60 bottom-7 lg:max-w-xl text-white left-4 lg:left-10">
                <h1>MONTREAL_</h1>
                <MontrealTime />
            </div>
        </div>
    );
};

export default HomePage;
