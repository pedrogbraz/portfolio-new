import Header from "@/components/header";
import Sociais from "@/components/sociais";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { IoLogoInstagram, IoCheckmarkDone } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { LuSend } from "react-icons/lu";
import { BookText } from "lucide-react";
import { FaUser } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      <Header />
      <div className="w-full bg-[--nightBlack] rounded-2xl p-5 space-y-6">
        <div className="flex flex-col items-center space-y-5">
          <Avatar className="size-32 border-8 border-[--metalBlack]">
            <AvatarFallback>
              <Image
                src="/foto.jpg"
                alt=""
                fill
                className="object-cover w-40 h-40"
              />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-semibold text-[--color-white]">
            Pedro Gontijo Braz
          </h1>
          <Separator className="bg-[--metalBlack] h-[1px]" />
        </div>
        <div className="flex justify-between px-6">
          <div className="text-[--color-white] font-semibold">
            <h2>País:</h2>
            <h2>Cidade:</h2>
            <h2>Idade:</h2>
          </div>
          <div className="flex flex-col items-end text-[--textColor]">
            <p>Brasil</p>
            <p>São Paulo</p>
            <p>16 anos</p>
          </div>
        </div>
        <div className="px-4 py-3 bg-[--metalBlack] rounded-[8px]">
          <h1 className="text-[--color-white] font-semibold">Redes Sociais:</h1>
          <div className="flex gap-6 justify-center pt-5 pb-3">
            <Sociais
              logo={<IoLogoInstagram />}
              name="Instagram"
              link="https://www.instagram.com/pedr0_br4z/"
            />
            <Sociais
              logo={<FaGithub />}
              name="Github"
              link="https://github.com/pedrogbraz"
            />
            <Sociais
              logo={<FaLinkedinIn />}
              name="Linkedin"
              link="https://www.linkedin.com/in/pedro-gontijo-braz-7b6014268/"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[--nightBlack] rounded-2xl p-5 space-y-4">
        <div className="inline-flex border border-white/10 rounded-full px-4 py-[6px]">
          <span className="flex items-center gap-1 text-[--color-white] text-xs">
            <FaUser size={14} className="text-[--color-theme]" />
            INÍCIO
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-6">
            <h1 className="text-[--color-white] font-semibold text-2xl flex flex-col">
              Specialist{" "}
              <span className="text-[--color-theme]">Web Development</span>
            </h1>
            <p className="text-[--textColor]">
              As a{" "}
              <span className="text-[--color-white] font-medium">
                Front End Developer
              </span>
              , my technical expertise stands out in crafting innovative
              solutions designed to exceed expectations and drive the success of
              each project.
            </p>
            <div className="flex gap-4">
              <div className="flex gap-1 items-center text-[--textColor]">
                <IoCheckmarkDone size={18} className="text-green-400" />
                <span className="text-sm">CLT/PJ/Freelancer</span>
              </div>
              <div className="flex gap-1 items-center text-[--textColor]">
                <IoCheckmarkDone size={18} className="text-green-400" />
                <span className="text-sm">Disponível para projetos</span>
              </div>
            </div>
            <Link
              href="/"
              className="flex gap-2 max-w-[182px] items-center py-2 px-3 text-[--color-white] bg-[--color-theme] rounded-[8px]"
            >
              <LuSend />
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-[--nightBlack] rounded-2xl p-5 space-y-4">
        <div className="inline-flex border border-white/10 rounded-full px-4 py-[6px] justify-center">
          <span className="flex items-center gap-1 text-[--color-white] text-xs">
            <FaUser size={14} className="text-[--color-theme]" />
            SOBRE
          </span>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[--color-white] font-semibold text-2xl">
              Sobre <span className="text-[--color-theme]">Mim</span>
            </h1>
            <p className="flex flex-col text-[--textColor] gap-4">
              <span>
                Sou Pedro Gontijo Braz, um apaixonado por tecnologia,
                especialmente focado no{" "}
                <span className="text-[--color-white] font-medium">
                  Desenvolvimento Front End
                </span>
                , onde busco constantemente criar soluções digitais inovadoras.
                Atualmente, estou aprimorando meu conhecimento através do{" "}
                <span className="text-[--color-white] font-medium">
                  Programa de Certificado Profissional em Ciência da Computação
                </span>{" "}
                na <span>Harvard University</span>, reconhecido por meu
                envolvimento ativo em atividades e grupos, incluindo o renomado{" "}
                <span>HarvardX CS50s.</span>
              </span>
              <span>
                Estou sempre em busca de expandir minhas habilidades em{" "}
                <span className="text-[--color-white] font-medium">
                  Java, JavaSpring, Angular, Docker e .NET
                </span>
                , e tenho uma{" "}
                <span className="text-[--color-white] font-medium">
                  paixão inabalável por enfrentar desafios complexos.
                </span>{" "}
                Estou preparado para oferecer contribuições significativas,
                trazendo uma variedade de habilidades e uma valiosa experiência
                para qualquer ambiente profissional.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[--nightBlack] rounded-2xl p-5 space-y-4">
        <div className="inline-flex border border-white/10 rounded-full px-4 py-[6px] justify-center">
          <span className="flex items-center gap-1 text-[--color-white] text-xs">
            <BookText size={14} className="text-[--color-theme]" />
            SKILLS
          </span>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[--color-white] font-semibold text-2xl">
              Minhas <span className="text-[--color-theme]">Skills</span>
            </h1>
            <p className="text-[--textColor]">
              Abaixo, você verá todas as minhas softs e hards skills.
            </p>
          </div>
          <div>
            <div className="flex justify-center bg-[--metalBlack] rounded-[8px] p-3 gap-3">
              <Image
                src="/html5.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/css3.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/js.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/tailwind.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/react.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/nextjs.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/typescript.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
              <Image
                src="/nodejs.svg"
                alt=""
                width={30}
                height={30}
                className="object-cover hover:-translate-y-1 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[--nightBlack] rounded-2xl p-5 space-y-4">
        <div className="inline-flex border border-white/10 rounded-full px-4 py-[6px] justify-center">
          <span className="flex items-center gap-1 text-[--color-white] text-xs">
            <BookText size={14} className="text-[--color-theme]" />
            CONTATO
          </span>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-[--textColor]">
              Abaixo, você pode entrar em contato comigo via e-mail.
            </h1>

            <div className="flex flex-col gap-2 px-12">
              <input
                type="text"
                placeholder="Digite seu nome"
                className="bg-[--metalBlack] rounded-[8px] p-2"
              />
              <input
                type="text"
                placeholder="Digite seu email"
                className="bg-[--metalBlack] rounded-[8px] p-2"
              />
              <input
                type="text"
                placeholder="Escreva o contexto"
                className="bg-[--metalBlack] rounded-[8px] p-2"
              />
              <textarea
                className="bg-[--metalBlack] resize-none rounded-[8px] p-2 h-32"
                placeholder="Digite o assunto"
              />
              <button className="bg-[--color-theme] text-[--color-white] rounded-[8px] p-2 mx-12">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[--textColor] text-center">
        © 2024 Pedro Gontijo Braz - Todos os direitos reservados. Elevando sua
        experiência digital.
      </div>
    </div>
  );
};

export default Home;
