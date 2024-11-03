import "./main.css";
import { useState } from "react";
import { myProjects } from "./myProjects";

import { AnimatePresence, motion } from "framer-motion";

export const Main = () => {
  const [curruntState, setCurruntState] = useState("all"); //by default == all
  const [projects, setProjects] = useState(myProjects);
  //reusable function
  const handleClick = (btnCategory) => {
    setCurruntState(btnCategory);
    const newArr = myProjects.filter((item) => {
      return item.category === btnCategory;
    });
    setProjects(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurruntState("all");
            setProjects(myProjects);
          }}
          className={curruntState === "all" ? "active" : null}
        >
          all Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={curruntState === "css" ? "active" : null}
        >
          hTML & CSS & Bootstrap
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={curruntState === "js" ? "active" : null}
        >
          JavaScript & API
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={curruntState === "react" ? "active" : null}
        >
          React & API
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {projects.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", stiffness: 50, damping: 8 }}
              key={item.imgPath}
              className="card"
            >
              <img src={item.imgPath} width={266} alt="daniels" />
              <div className="box" style={{ width: "266px" }}>
                <h2 className="title">{item.projectTitle}</h2>
                <p className="subtitle">{item.projectSub_title}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={item.iconLink} target="_blank">
                      <div className="icon-link"></div>
                    </a>
                    <a href={item.iconGithub} target="_blank">
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  <a href="" className="link flex">
                    more
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};
