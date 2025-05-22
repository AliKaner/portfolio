import Image from "next/image";

// BusinessCard interface
interface BusinessCardProps {
  name: string;
  image: string;
  description: string;
}

// BusinessCard component
const BusinessCard = ({ name, image, description }: BusinessCardProps) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg p-4 shadow-md ">
      <Image src={image} alt={name} className="h-40 w-40 rounded-full" />
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

// export
export default BusinessCard;
