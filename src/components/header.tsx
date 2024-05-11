import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-end p-5 text-[--color-white]">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="bg-[--power__black] border-none text-white space-y-2">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[--color-white] hover:text-[--color-theme] duration-300"
              >
                Início
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[--color-white] hover:text-[--color-theme] duration-300"
              >
                Projetos
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
