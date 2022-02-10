import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burger-menu/burger-menu";
import { useViewPortWidth } from "../../hooks/useViewPortWidth";
import styles from "./header.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  return (
    <nav
      className={`nav bg-gray-100/80 backdrop-blur-sm h-screen sm:h-full sm:bg-transparent sm:backdrop-blur-none grow md:grow-0 font-[JetBrainsMono-Bold] flex flex-col sm:flex-row gap-8 ${styles["padding-header"]} sm:!py-0 items-center`}
    >
      <Link href="/">
        <a className="group relative cursor-pointer">
          About
          <span className="w-0 group-hover:w-full absolute h-2 bg-cyan-600 -bottom-1 left-0 right-0 transition-[width]" />
        </a>
      </Link>
      <Link href="#skills">
        <a className="group relative cursor-pointer">
          Skills
          <span className="w-0 group-hover:w-full absolute h-2 bg-cyan-600 -bottom-1 left-0 right-0 transition-[width]" />
        </a>
      </Link>
      <Link href="#projects">
        <a className="group relative cursor-pointer">
          Projects
          <span className="w-0 group-hover:w-full absolute h-2 bg-cyan-600 -bottom-1 left-0 right-0 transition-[width]" />
        </a>
      </Link>
      <Link href="#contact">
        <a className="group relative cursor-pointer">
          Contact
          <span className="w-0 group-hover:w-full absolute h-2 bg-cyan-600 -bottom-1 left-0 right-0 transition-[width]" />
        </a>
      </Link>
    </nav>
  );
};
export const Header = () => {
  const [opened, setOpened] = useState(false);
  const [viewportWidth] = useViewPortWidth();
  useEffect(() => {
    if (opened) {
      document
        .querySelector(".header-wrapper")
        ?.classList.remove("bg-gray-100/80");
      document
        .querySelector(".header-wrapper")
        ?.classList.remove("backdrop-blur-sm");
    } else {
      document
        .querySelector(".header-wrapper")
        ?.classList.add("bg-gray-100/80");
      document
        .querySelector(".header-wrapper")
        ?.classList.add("backdrop-blur-sm");
    }
  }, [opened]);
  return (
    <div className="header-wrapper bg-gray-100/80 backdrop-blur-sm top-0 left-0 right-0 fixed z-50 min-w-[320px]">
      <header
        className={`header min-h-[10vh] py-5 flex items-center justify-between w-11/12 sm:w-4/5 m-auto`}
      >
        <div className="logo z-40">
          <div className={`image-container w-11`}>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/images-b3099.appspot.com/o/avatar.svg?alt=media&token=ba3ea983-3133-41d9-88c4-002deffd991a"
              }
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        {viewportWidth >= 640 ? (
          <div className={` h-full`}>
            <NavBar />
          </div>
        ) : (
          <div className=" h-full flex items-center justify-between">
            {opened && (
              <div className={`absolute z-30 inset-0 h-full`}>
                <NavBar />
              </div>
            )}
            <BurgerMenu opened={opened} setOpened={setOpened} />
          </div>
        )}
      </header>
    </div>
  );
};
