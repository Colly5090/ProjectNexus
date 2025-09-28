import Image from "next/image";
import { HeroCardProps } from "@/interfaces";

const HeroCard: React.FC<HeroCardProps> = ({ image, title, description }) => {
    return (
        <div className="flex items-center gap-2 ml-4 w-full bg-white overflow-hidden">
            <Image src={image} alt={title} width={400} height={400} className="object-cover" />
            <div className="flex flex-col p-4">
                <h3 className="text-3xl font-extrabold">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
        </div>
    );
};

export default HeroCard;