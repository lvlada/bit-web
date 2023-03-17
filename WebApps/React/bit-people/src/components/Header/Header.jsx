import React from "react";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

export default function Header() {
  return (
    <nav>
      <div className="container">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            BIT People
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#"><i class="material-icons">refresh</i></a>
            </li>
            <li>
              <a href="#"><i class="material-icons">view_list</i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
