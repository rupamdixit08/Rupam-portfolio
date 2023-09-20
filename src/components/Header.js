import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Rupam Dixit</h1>
      <p>Experienced Frontend Developer</p>
      <nav>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
