import Badges from "@/components/badges";
import Header from "@/components/header";
import Languages from "@/components/languages";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Linkedin, MoveRight } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { TbBrandCss3  } from "react-icons/tb";
import { IoLogoJavascript, IoLogoHtml5  } from "react-icons/io";
import { BiLogoTypescript, BiLogoTailwindCss  } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="px-16 mt-36 space-y-6 mb-32">
          <div className="space-y-2">
            <span className="text-[--color-theme]">Olá, meu nome é</span>
            <h1 className="text-3xl text-[--color-white]">
              Pedro Gontijo Braz
            </h1>
          </div>
          <p className="text-[--textColor]">
            Olá, meu nome é Pedro Gontijo Braz e sou um{" "}
            <strong className="text-[--color-white] font-medium">
              Desenvolvedor Front-End
            </strong>
            , que pretende se tornar um Desenvolvedor Full-Stacks, sou
            apaixonado por tecnologia. Com mais de{" "}
            <strong className="text-[--color-white] font-medium">
              1 ano de experiência
            </strong>
            . Meu foco é criar interfaces de usuário bonitas, modernas,
            interativa e funcional.{" "}
            <strong className="text-[--color-white] font-medium">
              Estou sempre aberto a novas oportunidades e desafios que me façam
              crescer na minha carreira.
            </strong>
          </p>
          <div className="space-y-3">
            <div className="flex gap-2">
              <Badges text="HTML" />
              <Badges text="CSS" />
              <Badges text="JavaScript" />
              <Badges text="TypeScript" />
            </div>
            <div className="flex gap-2">
              <Badges text="Tailwind" />
              <Badges text="React" />
              <Badges text="Nextjs" />
            </div>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <Button className="px-6 py-6 bg-[--color-theme] rounded-[8px] text-[--color-white]">
              <div className="flex items-center gap-3">
                <span>Entre em contato</span>
                <MoveRight />
              </div>
            </Button>
            <div className="flex gap-3 text-[--textColor]">
              <Link href="https://github.com/pedrogbraz" target="_blank">
                <GitHubLogoIcon className="size-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pedro-gontijo-braz-7b6014268/"
                target="_blank"
              >
                <Linkedin className="size-6" />
              </Link>
              <Link
                href="https://www.instagram.com/pedr0_br4z/"
                target="_blank"
              >
                <InstagramLogoIcon className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-16 space-y-14">
          <div className="space-y-3">
            <span className="text-[--color-theme]">../lingaguens</span>
            <h2 className="text-3xl text-[--color-white] font-medium">
              Conhecimentos
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Languages name="HTML5" icon={<IoLogoHtml5 />} time="1 ano de experiência" />
            <Languages name="CSS3" icon={<TbBrandCss3 size={20} />} time="1 ano de experiência" />
            <Languages name="JavaScript" icon={<IoLogoJavascript />} time="8 meses de experiência" />
            <Languages name="TypeScript" icon={<BiLogoTypescript size={18} />} time="5 meses de experiência" />
            <Languages name="React" icon={<FaReact size={18} />} time="2 meses de experiência" />
            <Languages name="Tailwindcss" icon={<BiLogoTailwindCss size={22} />} time="2 meses de experiência" />
          </div>
        </div>
      </div>
    </>
  );
}
