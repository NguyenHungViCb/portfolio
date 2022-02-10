
useAnimationFrame(4000, new AbortController(), () => {
    if (current === aboutMe.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
      const title = typewritter.current?.querySelector("#title");
      const cover = typewritter.current?.querySelector("#title #cover");
      const cursor = typewritter.current?.querySelector("#cursor");
      if (cover && cursor) {
        animateTo(cover, [{ left: "0" }], {
          duration: 2000,
          easing: `steps(${title?.textContent?.length})`,
          fill: "forwards",
        });
        animateTo(cursor, [{ transform: `translateX(0)` }], {
          duration: 2000,
          easing: `steps(${title?.textContent?.length})`,
          fill: "forwards",
        });
      }
    }
  });

  useEffect(() => {
    const title = typewritter.current?.querySelector("#title");
    const cover = typewritter.current?.querySelector("#title #cover");
    const cursor = typewritter.current?.querySelector("#cursor");
    const sequenceAnimation = async () => {
      if (cover && cursor) {
        if (current === 0) {
          animateTo(cover, [{ left: "100%" }], {
            duration: 2000,
            easing: `steps(${title?.textContent?.length})`,
            fill: "forwards",
          });
          animateTo(
            cursor,
            [{ transform: `translateX(${title?.textContent?.length}ch)` }],
            {
              duration: 2000,
              easing: `steps(${title?.textContent?.length})`,
              fill: "forwards",
            }
          );
        }
        await new Promise(() => {
          setTimeout(() => {
            animateTo(cover, [{ left: "100%" }], {
              duration: 2000,
              easing: `steps(${title?.textContent?.length})`,
              fill: "forwards",
            });
            animateTo(
              cursor,
              [{ transform: `translateX(${title?.textContent?.length}ch)` }],
              {
                duration: 2000,
                easing: `steps(${title?.textContent?.length})`,
                fill: "forwards",
              }
            );
          }, 2000);
        });
      }
    };
    sequenceAnimation();
  }, []);

