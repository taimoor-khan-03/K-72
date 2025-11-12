import HomeBottomText from "@/components/home/HomeBottomText"
import HomeHeroText from "@/components/home/HomeHeroText"
import Video from "@/components/home/Video"
const HomePage = () => {
  return (
    <div className="">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex overflow-hidden pb-5 flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText/>
      </div>
      <div className="absolute text-xs max-w-xs  right-0 bottom-1/3 ">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      </div>
    </div>
  )
}

export default HomePage