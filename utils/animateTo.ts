export function animateTo(element: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) {
  const anim = element.animate(keyframes, { ...options, fill: "both" });
  anim.addEventListener("finish", () => {
    anim.commitStyles();
    anim.cancel();
  })

  return anim;
}
