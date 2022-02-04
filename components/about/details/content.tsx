import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const aboutNavClassName =
  "w-full sm:h-full flex items-center justify-center rounded-t-md sm:rounded-none p-1 sm:py-3";
const activeAboutNavClassName = `bg-blue-900 ${aboutNavClassName}`;
const Content: NextPage<{
  aboutMe: any;
  aboutNavRef: React.RefObject<HTMLUListElement>;
  setCurrentAbout: (index: number) => void;
  currentAbout: number;
  locked: boolean;
  setLocked: (current: boolean) => void;
}> = ({
  aboutMe,
  aboutNavRef,
  currentAbout,
  setCurrentAbout,
  locked,
  setLocked,
}) => {
  const contentListRef = useRef<HTMLUListElement>(null);
  const [unlockVisibled, setUnlockVisibled] = useState(false);

  // TODO: Change this to animate lock svg instead
  useEffect(() => {
    if (locked) {
      return;
    }
    setUnlockVisibled(true);
    setTimeout(() => {
      setUnlockVisibled(false);
    }, 1000);
  }, [locked]);

  return (
    <div
      className={`about-nav grow flex flex-col sm:flex-row w-full border-2 border-black rounded-lg text-sm sm:text-base`}
      onMouseEnter={() => setLocked(true)}
      onMouseLeave={() => setLocked(false)}
    >
      <ul
        className={`flex sm:flex-col justify-center w-full sm:w-1/4`}
        ref={aboutNavRef}
      >
        {aboutMe &&
          Array.isArray(aboutMe) &&
          aboutMe.map((about: any, index: number) => (
            <li
              className={`cursor-pointer ${
                currentAbout === index
                  ? activeAboutNavClassName
                  : aboutNavClassName
              }`}
              onClick={() => {
                setCurrentAbout(index);
              }}
              key={about.id + "nav"}
            >
              {about.title}
            </li>
          ))}
      </ul>
      <hr className={`sm:h-full border-black border`} />
      <div className="relative sm:w-9/12 h-full overflow-scroll">
        {locked ? (
          <div className="image-container absolute right-0 z-20">
            <Image src="/assets/lock.svg" height={32} width={32} alt={"lock"} />
          </div>
        ) : (
          unlockVisibled && (
            <div className="image-container absolute right-0 z-20">
              <Image
                src="/assets/unlock.svg"
                height={32}
                width={32}
                alt={"lock"}
              />
            </div>
          )
        )}
        <ul ref={contentListRef}>
          {aboutMe &&
            Array.isArray(aboutMe) &&
            aboutMe.map((about: any, index: number) => (
              <li
                className={`absolute inset-0 p-1 sm:p-2 md:p-3 ${
                  currentAbout !== index ? "opacity-0" : "opacity-100 z-10"
                }`}
                key={about.id + "content"}
                dangerouslySetInnerHTML={{ __html: about.contentHtml }}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
