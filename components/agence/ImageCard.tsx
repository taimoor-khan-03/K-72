import Image from "next/image";
const ImageCard = () => {
    return (
        <div className="top-[30vh] left-[20vw] absolute overflow-hidden rounded-4xl h-[20vh] w-[45vw] md:h-[40vh] md:w-[27vw] xl:h-[50vh] xl:w-[20vw]">
            <Image
                src="/images/man.jpg"
                alt="man"
                width={500}
                height={500}
                className="w-full h-full"
            ></Image>
        </div>
    );
};

export default ImageCard;
