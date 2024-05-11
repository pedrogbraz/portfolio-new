import Link from "next/link";
import { ReactNode } from "react";

type SociaisProps = {
  logo: ReactNode;
  name: string;
  link: string;
};

const Sociais = ({ logo, name, link }: SociaisProps) => {
  return (
    <div className="flex flex-col items-center gap-1 text-[--textColor]">
      <Link href={link} target="_blank">
        <div className="hover:text-[--color-theme] border-[--textColor] border p-3 rounded-full hover:border-[--color-theme] duration-300">
          <div>{logo}</div>
        </div>
      </Link>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Sociais;
