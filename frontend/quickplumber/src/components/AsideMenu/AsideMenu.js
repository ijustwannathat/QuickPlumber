import React from "react";
import "../AsideMenu/AsideMenu.css";
import SearchAside from "./SearchAside/SearchAside";
import NavigationAside from "./NavigationAside/NavigationAside";
import ActionsAside from "./ActionsAside/ActionsAside";

export default function AsideMenu() {
  return (
    <aside className="menu">
      <SearchAside />
      <NavigationAside />
      <ActionsAside />
    </aside>
  );
}
