import React from 'react';
import "../Header/Header.css";
import {Bell} from "react-bootstrap-icons";
export default function Header() {
  return (
    <header className="header">
        <div className="header__title">
            <h1>QuickPlumber</h1>
        </div>
        <div className="header__actions">
            <div className="notifications">
                <Bell size={30}/>
            </div>
            <div className="avatar"></div>
        </div>
    </header>
  )
};
