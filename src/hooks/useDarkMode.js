import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "darkModeEnabled",
    initialValue
  );

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return [darkModeEnabled, toggleDarkMode];
};

export default useDarkMode;
