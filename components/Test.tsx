import Image from "next/image";

const Test = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-gray-900 flex items-center justify-center">
            <h1 className="font-extrabold text-[18vw] text-transparent tracking-tighter absolute z-20 masked-text">
                CREATIVE
            </h1>

            <div className="absolute inset-0 w-[150%] h-full z-10 masked-content">
                <Image
                    src=""
                    alt="Background Image"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Test;
