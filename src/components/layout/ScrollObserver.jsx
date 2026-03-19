import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollObserver() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId;

    if (hash) {
      // Small timeout to ensure DOM has painted the new route before scrolling
      timeoutId = window.setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [pathname, hash]);

  return null;
}
