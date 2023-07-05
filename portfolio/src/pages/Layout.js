import React from "react";
import "./Layout.css";
import logo from "../media/tm.svg";
import git from "../media/github.svg";
import linkedin from "../media/linkedin.svg";
import phone from "../media/phone.svg";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <header>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={logo} alt="logo" className="logo" />
            <div
              className="components"
              style={{ display: "flex", flexDirection: "row" }}
            >

              <a href="/TakodaMundy.pdf">
                <button className="cta">Resume</button>
              </a>
            </div>
          </div>
        </header>
      </div>
      <main>{children}</main>
      <div id="sidebar">
        <a className="email" href="mailto:takamundy@gmail.com">
          takamundy@gmail.com
        </a>
      </div>
      <div id="leftSidebar" className="lsb">
        <a href="https://www.linkedin.com/in/takoda-mundy-435b971a9/">
          <img src={linkedin} alt="LinkeIn" className="git" />
        </a>
        <a href="https://github.com/taka6745">
          <img src={git} alt="GitHub" className="git" />
        </a>
        <a href="tel:+61451157786">
          <img src={phone} alt="Phone" className="git" />
        </a>
      </div>
    </>
  );
};

export default Layout;
