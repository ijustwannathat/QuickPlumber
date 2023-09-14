import React from "react";

export default function ActionsAside() {
  return (
    <div className="aside__actions">
      <nav className="aside-nav">
        <ul>
          <li>
            <div className="aside-icon exit"></div>
            <a href="/" className="aside-nav__link">
              Exit
            </a>
          </li>
          <li>
            <div className="aside-icon lang"></div>
            <a href="/" className="aside-nav__link">
              Change Language
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
