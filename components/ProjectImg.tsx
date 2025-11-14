import Image from "next/image";

interface Img {
    Src: string;
    Title?: string;
    Src2: string;
    Title2?: string;
}

const ProjectImg: React.FC<Img> = ({ Src, Src2 }) => {
    return (
        <>
            <div className="w-full md:w-1/2 h-full bg-amber-950 overflow-hidden relative transition-all duration-300 hover:rounded-[40px]">
                <Image
                    src={Src}
                    alt="image"
                    fill
                    className="object-cover"
                ></Image>
                <div className="opacity-0 hover:opacity-100 flex items-center justify-center h-full w-full absolute top-0 left-0 bg-black/20">
                    <h1 className="text-white border-white font-myfont font-light uppercase text-3xl border-2 pt-2 px-4 rounded-full">
                        View Projects
                    </h1>
                </div>
            </div>

            <div className="w-full md:w-1/2 h-full bg-amber-950 overflow-hidden relative transition-all duration-300 hover:rounded-[40px]">
                <Image
                    src={Src2}
                    alt="image"
                    fill
                    className="object-cover"
                ></Image>
                <div className="opacity-0 hover:opacity-100 flex items-center justify-center h-full w-full absolute top-0 left-0 bg-black/20">
                    <h1 className="text-white border-white font-myfont font-light uppercase text-3xl border-2 pt-2 px-4 rounded-full">
                        View Projects
                    </h1>
                </div>
            </div>
        </>
    );
};

export default ProjectImg;
