import { useEffect, useState } from "react";
import "./header.css";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("curruntTheme") ?? "dark"
  );

  //update dom
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "curruntTheme",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("curruntTheme"));
        }}
      >
        <span className={theme === "dark" ? "icon-moon-o " : "icon-sun"}></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
