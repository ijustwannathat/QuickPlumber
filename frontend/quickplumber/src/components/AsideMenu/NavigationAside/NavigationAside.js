import React from "react";
import "../NavigationAside/NavigationAside.css";

export default function NavigationAside() {
  return (
    <div className="aside__main-nav">
      <nav className="aside-nav">
        <ul>
          <li>
            <div className="aside-icon"></div>
            <a href="/" className="aside-nav__link">
              Home
            </a>
          </li>
          <li>
            <div className="aside-icon box"></div>
            <a href="/" className="aside-nav__link">
              Statistic
            </a>
          </li>
          <li>
            <div className="aside-icon history"></div>
            <a href="/" className="aside-nav__link">
              History
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
