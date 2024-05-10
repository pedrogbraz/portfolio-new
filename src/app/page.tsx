import Badges from "@/components/badges";
import Header from "@/components/header";
import Languages from "@/components/languages";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Linkedin, MoveRight } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Contacts from "@/components/contacts";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col gap-36 mb-10">
          <div className="px-16 mt-40 space-y-6 md:mt-32 md:px-32 md:flex md:gap-32 md:items-center md:justify-between">
            <div className=" md:w-[530px]">
              <div className="space-y-2">
                <span className="text-[--color-theme]">Olá, meu nome é</span>
                <h1 className="text-3xl text-[--color-white]">
                  Pedro Gontijo Braz
                </h1>
              </div>
              <p className="text-[--textColor] pb-6">
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
                  Estou sempre aberto a novas oportunidades e desafios que me
                  façam crescer na minha carreira.
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
                    <MoveRight className="size-5" />
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
            <Image
              src="/perfil.png"
              alt=""
              width={500}
              height={500}
              className="max-h-[500px] rounded-xl"
              id="foto"
            />
          </div>
          <div className="px-16 space-y-14">
            <div className="space-y-3">
              <span className="text-[--color-theme]">../lingaguens</span>
              <h2 className="text-3xl text-[--color-white] font-medium">
                Conhecimentos
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Languages
                name="HTML5"
                icon={<IoLogoHtml5 />}
                time="1 ano de experiência"
              />
              <Languages
                name="CSS3"
                icon={<TbBrandCss3 size={20} />}
                time="1 ano de experiência"
              />
              <Languages
                name="JavaScript"
                icon={<IoLogoJavascript />}
                time="8 meses de experiência"
              />
              <Languages
                name="TypeScript"
                icon={<BiLogoTypescript size={18} />}
                time="5 meses de experiência"
              />
              <Languages
                name="React"
                icon={<FaReact size={18} />}
                time="2 meses de experiência"
              />
              <Languages
                name="Tailwindcss"
                icon={<BiLogoTailwindCss size={22} />}
                time="2 meses de experiência"
              />
              <Languages
                name="Nodejs"
                icon={<IoLogoNodejs size={22} />}
                time="2 meses de experiência"
              />
              <Languages
                name="Postgres"
                icon={<BiLogoPostgresql size={22} />}
                time="1 semana de experiência"
              />
            </div>
          </div>
          <div className="px-16">
            <div className="space-y-3 mb-5">
              <span className="text-[--color-theme]">../destaques</span>
              <h2 className="text-3xl text-[--color-white] font-medium">
                Projeto em destaque
              </h2>
            </div>
            <Separator className="h-[1px] bg-white/10 mb-10" />
            <div className="flex flex-col gap-8 items-center">
              <div>
                <div className="w-[320px] h-[204px] rounded-[8px]">
                  <Image
                    src="/capa.png"
                    alt={`Logo de FSW Foods`}
                    width={320}
                    height={204}
                    className="rounded-[8px]"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-[--color-white]">FSW Foods</h2>
                <p className="text-sm text-[--textColor]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  officia tenetur quaerat veritatis, commodi, voluptates aliquam
                  dolores ipsam.
                </p>
                <div className="space-y-1.5">
                  <div className="flex gap-1.5 text-sm">
                    <Badges text="React" />
                    <Badges text="Nextjs" />
                    <Badges text="Tailwind" />
                    <Badges text="Postgres" />
                  </div>
                  <div className="flex gap-1.5 text-sm">
                    <Badges text="Prisma" />
                    <Badges text="NeonDB" />
                    <Badges text="NextAuth" />
                  </div>
                </div>
                <div>
                  <Link
                    className="flex pt-2 items-center gap-3 text-[--color-white]"
                    href="https://fullstackweek-foods-drab.vercel.app/"
                    target="_blank"
                  >
                    <span className="font-medium">Ver projeto</span>
                    <MoveRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
            <Separator className="h-[1px] bg-white/10 mt-10  mb-10" />
            <div className="flex flex-col gap-8 items-center">
              <div>
                <div className="w-[320px] h-[204px] rounded-[8px]">
                  <Image
                    src="/capa02.png"
                    alt={`Logo de FSW Foods`}
                    width={320}
                    height={204}
                    className="max-h-[204px] object-cover rounded-[8px]"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-[--color-white]">Site de Hamburgueria</h2>
                <p className="text-sm text-[--textColor]">
                  Site para Hamburgueria que desenvolvi do zero usando HTML,
                  CSS, Tailwindcss e JavaScript Desenvolvi esse site conforme
                  uma Aula de Tailwindcss que fiz para me aprimorar em
                  Tailwindcss pois até então eu não possuia tanta Habilidade.
                </p>
                <div className="space-y-1.5">
                  <div className="flex gap-1.5 text-sm">
                    <Badges text="React" />
                    <Badges text="Nextjs" />
                    <Badges text="Tailwind" />
                    <Badges text="Postgres" />
                  </div>
                  <div className="flex gap-1.5 text-sm">
                    <Badges text="Prisma" />
                    <Badges text="NeonDB" />
                    <Badges text="NextAuth" />
                  </div>
                </div>
                <div>
                  <Link
                    className="flex pt-2 items-center gap-3 text-[--color-white]"
                    href="https://site-hamburgueria-pedrogbraz.vercel.app/
                    "
                    target="_blank"
                  >
                    <span className="font-medium">Ver projeto</span>
                    <MoveRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
            <Separator className="h-[1px] bg-white/10 mt-10  mb-10" />
            <div className="flex flex-col gap-8 items-center">
              <div>
                <div className="w-[320px] h-[204px] rounded-[8px]">
                  <Image
                    src="/capa03.png"
                    alt={`Logo de FSW Foods`}
                    width={320}
                    height={204}
                    className="rounded-[8px]"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-[--color-white]">NLW Unite</h2>
                <p className="text-sm text-[--textColor]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  officia tenetur quaerat veritatis, commodi, voluptates aliquam
                  dolores ipsam.
                </p>
                <div className="space-y-1.5">
                  <div className="flex gap-1.5 text-sm">
                    <Badges text="React" />
                    <Badges text="Nextjs" />
                    <Badges text="Tailwind" />
                    <Badges text="Postgres" />
                  </div>
                  <div className="flex gap-1.5 text-sm">
                    <Badges text="Prisma" />
                    <Badges text="NeonDB" />
                    <Badges text="NextAuth" />
                  </div>
                </div>
                <div>
                  <Link
                    className="flex pt-2 items-center gap-3 text-[--color-white]"
                    href="https://nlw-unite-reactjs-pedrogbraz.vercel.app/"
                    target="_blank"
                  >
                    <span className="font-medium">Ver projeto</span>
                    <MoveRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
            <Separator className="h-[1px] bg-white/10 mt-10  mb-10" />
            <div className="flex gap-2">
              <p className="text-[--textColor]">Se interessou?</p>
              <Link
                className="flex items-center gap-2 text-[--color-white]"
                href="https://nlw-unite-reactjs-pedrogbraz.vercel.app/"
                target="_blank"
              >
                <span className="font-medium">Ver todos</span>
                <MoveRight className="size-5" />
              </Link>
            </div>
          </div>
          <div className="px-16 space-y-14">
            <div className="flex flex-col justify-center items-center space-y-3">
              <span className="text-[--color-theme]">../contato</span>
              <h2 className="text-3xl text-[--color-white] font-medium">
                Quer falar comigo?
              </h2>
              <Contacts />
            </div>
          </div>
          <p className="text-[--textColor] text-sm px-16 text-center">
            © 2024
            <Link className="hover:text-white duration-300" href="https://github.com/pedrogbraz">
              <span> Pedro Gontijo Braz</span>
            </Link>{" "}
            - All Rights Reserved. Elevating your digital experience.
          </p>
        </div>
      </div>
    </>
  );
}
