import { MoveRight } from "lucide-react";

const Contacts = () => {
  return (
    <div className="w-full px-3 pt-8 space-y-3">
      <input
        className="w-full rounded-[8px] px-3 py-2 bg-white/10 text-[--color-white] outline-none"
        placeholder="Digite seu nome"
        type="text"
      />
      <input
        className="w-full rounded-[8px] px-3 py-2 bg-white/10 text-[--color-white] outline-none"
        placeholder="Digite seu email"
        type="text"
      />
      <textarea
        className="w-full rounded-[8px] px-3 py-2 h-32 bg-white/10 outline-none text-[--color-white] resize-none"
        placeholder="Digite a mensagem"
      ></textarea>
      <div className="px-12 pt-3">
        <input
          className="bg-[--color-theme] p-2 rounded-[8px] w-full text-white"
          type="submit"
          value="Enviar mensagem"
        />
      </div>
    </div>
  );
};

export default Contacts;
