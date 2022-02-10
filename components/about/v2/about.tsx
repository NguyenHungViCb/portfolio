import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
import { animateTo } from "../../../utils/animateTo";
import WelcomeHeading from "../v2/wellcome-heading";
import Terminal from "./terminal";

const animate = (
  covers: NodeListOf<Element>,
  cursors: NodeListOf<Element>,
  title: Element,
  direction: "reveal" | "delete"
) => {
  for (const cover of Array.from(covers)) {
    animateTo(cover, [{ left: direction === "reveal" ? "100%" : "0" }], {
      duration: 130 * title.textContent!.length,
      easing: `steps(${title.textContent?.length})`,
      fill: "forwards",
    });
  }
  for (const cursor of Array.from(cursors)) {
    animateTo(
      cursor,
      [
        {
          transform:
            direction === "reveal"
              ? `translateX(${title?.textContent?.length}ch)`
              : `translateX(0)`,
        },
      ],
      {
        duration: 130 * title.textContent!.length,
        easing: `steps(${title.textContent?.length})`,
        fill: "forwards",
      }
    );
  }
};

const About: React.FC<{ aboutMe: any }> = ({ aboutMe }) => {
  const typewritter = useRef<HTMLSpanElement>(null);
  // Use to control title being display
  const [current, setCurrent] = useState<number>(0);
  // Use to control content being display
  const [contentIndex, setContentIndex] = useState<number>(0);

  // DELETE ANIMATION
  useAnimationFrame(5000, new AbortController(), async () => {
    const title = document.querySelector("#title");
    const covers = document.querySelectorAll(".cover");
    const cursors = document.querySelectorAll(".cursor");

    if (covers && cursors && title) {
      animate(covers, cursors, title, "delete");
      // Wait for animation to finished before change current
      await new Promise(() => {
        setTimeout(() => {
          if (current === aboutMe.length - 1) {
            setCurrent(0);
          } else {
            setCurrent(current + 1);
          }
        }, 130 * title.textContent!.length + 1000);
      });
    }
  });

  // REVEAL ANIMATION
  // Rerun everytime current change
  // Animate reveal then wait for animation to finished
  useEffect(() => {
    const title = document.querySelector("#title");
    const covers = document.querySelectorAll(".cover");
    const cursors = document.querySelectorAll(".cursor");

    const sequenceAnimation = async () => {
      if (covers && cursors && title) {
        animate(covers, cursors, title, "reveal");
        await new Promise(() => {
          setTimeout(() => {
            // Use different state because content should be display 
            // only after title has been revealed
            setContentIndex(current);
          }, 130 * title.textContent!.length + 100);
        });
      }
    };
    sequenceAnimation();
  }, [current]);

  return (
    <div className="flex flex-col gap-5 items-center grow">
      <WelcomeHeading
        typewritter={typewritter}
        aboutMe={aboutMe}
        current={current}
      />
      <Terminal
        aboutMe={aboutMe}
        contentIndex={contentIndex}
        current={current}
      />
    </div>
  );
};

export default About;
