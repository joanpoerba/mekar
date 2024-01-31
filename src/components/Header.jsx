import { Button, Flowbite } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = ({ bgColor }) => {
  const [isOpen, setOpen] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);

  const customHeaderTheme = {
    button: {
      color: {
        default:
          "text-white bg-slate-400 border border-transparent enabled:hover:bg-slate-600 focus:ring-4 dark:bg-blue-900 dark:enabled:hover:bg-blue-900 dark:focus:ring-blue-950 dark:border-blue-900",
      },
    },
  };

  return (
    <Flowbite theme={{ theme: customHeaderTheme }}>
      <header
        className={`w-full hidden lg:flex justify-between items-center transition-all text-white fixed z-10 ${bgColor}`}
      >
        <a href="#home" className="flex items-center gap-x-2 cursor-pointer">
          <img className="w-[30px]" src="/whiteLogo.png" alt="" />
          <h3 className="text-xl font-bold cursor-pointer">Mekar Jaya</h3>
        </a>
        <nav>
          <ul className="flex gap-x-10">
            <li>
              <a href="#tentang">tentang</a>
            </li>
            <li>
              <a href="#projek">projek</a>
            </li>
          </ul>
        </nav>
        <Link target="_blank" to="https://wa.me/08127066036">
          <Button color="default" className="font-semibold">
            Kontak
          </Button>
        </Link>
      </header>

      <header
        className={`w-full block lg:hidden bg-zinc-800 fixed z-10 ${
          navbarStatus ? "h-fit p-6" : "p-6"
        }`}
      >
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="w-[33px] rounded-full"
              src="/whiteLogo.png"
              alt=""
            />
            <p className="font-bold text-white text-xl lg:text-2xl">
              Mekar Jaya
            </p>
          </div>
          <div>
            <Hamburger
              size={26}
              onToggle={(toggled) => {
                if (toggled) {
                  setNavbarStatus(true);
                } else {
                  setNavbarStatus(false);
                }
              }}
              toggled={isOpen}
              toggle={setOpen}
              color="white"
            />
          </div>
        </section>
        <nav className={`${navbarStatus ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center text-white gap-y-5 py-5">
            <li>
              <a href="#tentang">tentang</a>
            </li>
            <li>
              <a href="#projek">projek</a>
            </li>
            <li className="w-[90%] md:w-[50%]">
              <Button color="default" className="w-full rounded-full">
                kontak
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </Flowbite>
  );
};

export default Header;
