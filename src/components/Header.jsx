import { Button, Flowbite } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = ({ bgColor }) => {
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
        className={`w-full flex justify-between items-center transition-all text-white fixed z-10 ${bgColor}`}
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
    </Flowbite>
  );
};

export default Header;
