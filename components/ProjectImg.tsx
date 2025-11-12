import Image from "next/image";

interface Img {
    Src: string;
    Title?: string;
    Src2: string;
    Title2?: string;
}

const ProjectImg: React.FC<Img> = ({ Src, Title, Src2, Title2 }) => {


    return (
        <>
            <div className="group transition-all hover:rounded-[70px] hover:cursor-pointer w-1/2 bg-purple-900 relative overflow-hidden">
                <Image
                    src={Src}
                    alt="image"
                    fill
                    className="object-fit"
                ></Image>
                <div className="transition-all opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/30  flex justify-center items-center">
                    {Title && (
                        <h2 className="uppercase text-6xl font-myfont font-light border-2 rounded-full text-white border-white pt-3 px-6">
                            {Title}
                        </h2>
                    )}
                </div>
            </div>

            <div className="group transition-all hover:rounded-[70px] hover:cursor-pointer w-1/2 bg-yellow-300 relative overflow-hidden">
                <Image
                    src={Src2}
                    alt="image"
                    fill
                    className="object-fit"
                ></Image>
                <div className="transition-all opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/30  flex justify-center items-center">
                    {Title2 && (
                        <h2 className="uppercase text-6xl font-myfont font-light border-2 rounded-full text-white border-white pt-3 px-6">
                            {Title2}
                        </h2>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectImg;
