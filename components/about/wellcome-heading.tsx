import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/globals.module.css";
import { animateTo } from "../../utils/animateTo";

let navItems: HTMLLIElement[] = [];
const WelcomeHeading: NextPage<{
  aboutMe: any;
  currentAbout: number;
}> = ({ aboutMe, currentAbout }) => {
  const navTextList = useRef<HTMLUListElement>(null);
  const [h1Length, setH1Length] = useState(150);

  useEffect(() => {
    if (navTextList.current) {
      navItems = Array.from(navTextList.current.querySelectorAll("li"));
    }
  }, []);

  useEffect(() => {
    if (navTextList.current) {
      const offset = currentAbout === 0 ? 0 : 3 * currentAbout;
      animateTo(
        navTextList.current,
        [{ transform: `translateY(-${offset}rem)` }],
        {
          duration: 150,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
      const liWidth = navItems[currentAbout].offsetWidth;
      if (liWidth > 100) {
        setH1Length(100 + liWidth);
      } else {
        setH1Length(150);
      }
    }
  }, [currentAbout]);

  return (
    <h1
      className={`text-2xl font-semibold italic text-slate-900 ${styles["font-inter-var"]} pb-3 relative flex pt-3 overflow-hidden border-2 `}
      style={{ width: h1Length + "px" }}
    >
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <span style={{ marginRight: "0.5ch" }}>Hi! I'm</span>
      <span className="inline-block ">
        <ul className={`absolute flex flex-col gap-4 top-3`} ref={navTextList}>
          {aboutMe &&
            Array.isArray(aboutMe) &&
            aboutMe.map((about: any, index: number) => (
              <li
                className={`w-max ${
                  currentAbout === index ? "opacity-1" : "opacity-0"
                }`}
                key={about.id}
              >
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative">
                  <span className="relative text-white">{about.title}</span>
                </span>
              </li>
            ))}
        </ul>
      </span>
    </h1>
  );
};

export default WelcomeHeading;
