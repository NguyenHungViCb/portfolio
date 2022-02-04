import React, { useEffect, useState, useRef } from "react";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { NextPage } from "next";
import WelcomeHeading from "../wellcome-heading";
import Content from "./content";
import Contact from "../contacts";

export const Details: NextPage<any> = ({ aboutMe, contactOptions }) => {
  const aboutNavRef = useRef<HTMLUListElement>(null);
  const [currentAbout, setCurrentAbout] = useState(0);
  const [itemsLength, setItemLength] = useState(0);
  const [locked, setLocked] = useState(false);
  const [controller, setController] = useState(new AbortController());

  // Change current content after every 3s
  useAnimationFrame(
    3000,
    controller,
    () => {
      if (itemsLength === 0) {
        controller.abort();
      }
      // If this is the last content => go back to the first
      if (currentAbout === itemsLength - 1) {
        setCurrentAbout(0);
      } else {
        // else go the next content
        setCurrentAbout(currentAbout + 1);
      }
    },
    [controller]
  );

  // Get number of content on the first render
  useEffect(() => {
    if (aboutNavRef.current) {
      setItemLength(
        Array.from(aboutNavRef.current.querySelectorAll("li")).length
      );
    }
  }, []);

  useEffect(() => {
    if (locked) {
      controller.abort();
    } else {
      setController(new AbortController());
    }
  }, [locked]);

  return (
    <div className="h-4/6 w-full flex flex-col items-center border border-green-900 gap-5">
      <WelcomeHeading aboutMe={aboutMe} currentAbout={currentAbout} />
      <Contact contactOptions={contactOptions} />
      <Content
        aboutMe={aboutMe}
        currentAbout={currentAbout}
        setCurrentAbout={setCurrentAbout}
        aboutNavRef={aboutNavRef}
        locked={locked}
        setLocked={setLocked}
      />
    </div>
  );
};

export default Details;
