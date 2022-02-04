import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burger-menu/burger-menu";
import { useViewPortWidth } from "../../hooks/useViewPortWidth";
import styles from "./header.module.css";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav
      className={`flex flex-col sm:flex-row gap-8 bg-sky-700 sm:bg-transparent h-full ${styles["padding-header"]} sm:!py-0 items-center`}
    >
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/skills">
        <a>Skills</a>
      </Link>
      <Link href="/skills">
        <a>Projects</a>
      </Link>
      <Link href="/skills">
        <a>Contact</a>
      </Link>
    </nav>
  );
};
export const Header = () => {
  const [opened, setOpened] = useState(false);
  const [viewportWidth] = useViewPortWidth();
  return (
    <header
      className={`header min-h-[10vh] py-5 border border-blue-900 flex items-center justify-between w-11/12 sm:w-4/5 m-auto`}
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
  );
};
