"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 md:px-32 text-[--textColor] py-8">
      <div>
        <Link href="/">
          <Image src="/Logo.png" alt="Logo" width={84} height={32} />
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <span className="text-lg text-[--color-theme]">#</span>
            <span className="duration-300 hover:text-[--color-white]">
              Início
            </span>
          </div>
        </Link>
        <Link href="/">
          <div className="flex gap-2 items-center">
            <span className="text-lg text-[--color-theme]">#</span>
            <span className="duration-300 hover:text-[--color-white]">
              Projetos
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
