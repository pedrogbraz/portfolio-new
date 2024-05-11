import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-14 md:px-16">
      <div className="w-full pt-8 space-y-3 md:max-w-[500px]">
        <input
          className="w-full rounded-[8px] px-3 py-2 bg-[--nightBlack] text-[--color-white] outline-none md:h-[56px]"
          placeholder="Digite seu nome"
          type="text"
        />
        <input
          className="w-full rounded-[8px] px-3 py-2 bg-[--nightBlack] text-[--color-white] outline-none md:h-[56px]"
          placeholder="Digite seu email"
          type="text"
        />
        <textarea
          className="w-full rounded-[8px] px-3 py-2 h-32 bg-[--nightBlack] outline-none text-[--color-white] resize-none md:h-64"
          placeholder="Digite a mensagem"
        ></textarea>
        <div className="px-12 pt-3 md:pt-6">
          <input
            className="bg-[--color-theme] p-2 md:p-4 rounded-[8px] w-full text-white"
            type="submit"
            value="Enviar mensagem"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
