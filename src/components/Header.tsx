import React from "react";
import Logo from "./Logo";
import { BsSearch, BsMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-20 w-full items-center bg-lightPrimary transition-all">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 md:px-8">
        <Logo />
        <div className="flex flex-grow items-center justify-end">
          <button className="rounded-full border-[1px] border-silver bg-platinum p-3">
            <BsSearch size={16} />
          </button>
        </div>

        <button className="rounded-full border-[1px] border-silver bg-platinum p-3">
          <BsMoonFill size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
