import Image from "next/image";
import { HeroCardProps } from "@/interfaces";
import Link from "next/link";

const HeroCard: React.FC<HeroCardProps> = ({ image, title, description, cta, href }) => {
    return (
        <div className="flex items-center gap-2 ml-4 w-full bg-white overflow-hidden max-h-48 md:max-h-80">
            <Image src={image} alt={title} width={250} height={250} className="object-cover h-full w-2/5 md:w-1/2" />
            <div className="flex flex-col p-3 md:p-8 items-center">
                <h3 className="text-lg md:text-3xl font-bold">{title}</h3>
                <p className="text-gray-600 text-xs md:text-base mt-2 line-clamp-4 md:line-clamp-5">{description}</p>
                <Link
                    href={href}
                    className="mt-10 inline-block text-sm md:text-base text-white bg-blue-600 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    {cta}
                </Link>
            </div>
        </div>
    );
};

export default HeroCard;