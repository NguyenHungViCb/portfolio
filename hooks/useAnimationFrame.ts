import { useEffect, useRef } from "react";
import { animationInterval } from "../utils/animationInterval";

export const useAnimationFrame = (
  ms: any,
  controller: AbortController | null,
  callback: (dependencies: any[]) => void,
  deps?: any[]
) => {
  const dependencies = deps || [];
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!controller) {
      return;
    }
    animationInterval(ms, controller.signal, () => {
      callbackRef.current(dependencies);
    });
    return () => {
      controller.abort();
    };
  }, [ms, ...dependencies]);
};
