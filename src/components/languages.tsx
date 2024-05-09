import { ReactNode } from "react";

type LanguagesProps = {
  icon: ReactNode;
  name: string;
  time: string;
};

const Languages = ({icon, name, time}: LanguagesProps) => {
  return (
    <div className="flex flex-col space-y-4 bg-white/5 p-6 rounded-[8px] text-[--textColor] justify-center md:w-[264px] hover:scale-[1.01] hover:text-[--color-theme] duration-300">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        {icon}
      </div>
      <p>{time}</p>
    </div>
  );
};

export default Languages;
