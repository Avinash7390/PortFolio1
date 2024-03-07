import React from "react";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Card from "./card";
import Data from "./projectData";
import { FaJava } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaComputer } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const data = Data;
  return (
    <>
      <header>
        <nav>
          <AnchorLink href="#home" className="anchor active">
            Home
          </AnchorLink>
          <AnchorLink href="#about" className="anchor">
            About
          </AnchorLink>
          <AnchorLink href="#skills" className="anchor">
            Skills
          </AnchorLink>
          <AnchorLink href="#projects" className="anchor">
            Projects
          </AnchorLink>
        </nav>
      </header>

      <section class="home" id="home">
        <img src="/assets/mount2.png" className="mount2" alt="error505" />
        <img src="/assets/mount1.png" className="mount1" alt="error505" />
        <img src="/assets/bush2.png" className="bush2" alt="error505" />
        <h1 className="title">Hi, I'm Avinash</h1>

        <img src="/assets/bush1.png" className="bush1" alt="error505" />
      </section>

      <section className="about">
        <div>
          <div>
            <h1 id="about">About Me</h1>
            <div className="intro">
              <p className="introText">
                Hello, I'm Avinash, a Pre-final year Computer Science and
                Engineering student at Motilal Nehru National Institute of
                Technology in Allahabad, Prayagraj.
                <br />
                <br />
                Passionate about problem-solving and delving into web
                development, computer fundamentals, I find joy in navigating the
                intricacies of technology. Nature beckons me, especially the
                solitude of mountains, where I feel most alive.
                <br />
                <br />
                In essence, I am Avinash - a seeker of solutions, a lover of
                mountains❤️, and a student of life's profound mysteries
              </p>
            </div>
          </div>
          <div id="skills" className="skills">
            <h1>Skills</h1>
            <div className="skillContent">
              <ul>
                <li>
                  <h2>Technical Languages</h2>
                  <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>
                      Java <FaJava />
                    </li>
                    <li>
                      JavaScript <RiJavascriptLine />
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>FrameWorks</h2>
                  <ul>
                    <li>
                      React <FaReact />
                    </li>
                    <li>
                      Express <SiExpress />
                    </li>
                    <li>
                      NodeJs <FaNodeJs />
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Cloud / Databases</h2>
                  <ul>
                    <li>
                      RDBMS (SQL) <TbFileTypeSql />
                    </li>
                    <li>
                      MongoDB <DiMongodb />
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Computer Fundamentals</h2>
                  <ul>
                    <li>
                      Operating System <FaComputer />
                    </li>
                    <li>
                      Database Management System (DBMS) <FaDatabase />
                    </li>
                    <li>
                      Computer Networks <FaNetworkWired />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 id="projects">Projects</h1>
            <div className="container">
              {data.map((d) => {
                return (
                  <>
                    <Card
                      title={d.title}
                      content={d.Desc}
                      image={d.image}
                      githubLink={d.githubLink}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <h1 id="profiles">Profiles</h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink
                to={"https://www.linkedin.com/in/avinashk18"}
                target="_blank"
              >
                <img src="/assets/linkedin.png" className="handles" />
              </NavLink>
              <NavLink
                to={"mailto:kumaravinash42592021@gmail.com"}
                target="_blank"
              >
                <img src="/assets/gmail.png" className="handles" />
              </NavLink>
              <NavLink to={"https://github.com/Avinash7390"} target="_blank">
                <img src="/assets/github.png" className="handles" />
              </NavLink>
              <NavLink to={"https://leetcode.com/iffthen/"} target="_blank">
                <img src="/assets/leetcode.svg" className="handles" />
              </NavLink>
              <NavLink
                to={"https://codeforces.com/profile/Ifffthen465"}
                target="_blank"
              >
                <img src="/assets/code-forces.svg" className="handles" />
              </NavLink>
              <NavLink
                to={"https://www.codechef.com/users/coder_366"}
                target="_blank"
              >
                <img src="/assets/codechef.png" className="handles" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
