import { useEffect, useState } from "react";

export default function useDarkSide() {
  // Start with an undefined theme and update once we can access localStorage
  const [theme, setTheme] = useState<string | undefined>();

  useEffect(() => {
    // This code runs after component mounts on the client side
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);

      // save theme to local storage
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
