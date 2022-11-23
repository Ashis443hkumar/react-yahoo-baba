import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink class="dropdown-item" to="/home1">
                          Home1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink class="dropdown-item" to="/home2">
                          Home2
                        </NavLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink class="dropdown-item" to="/home3">
                          Home3
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SortCoder
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink class="dropdown-item" to="elements">
                          Elements
                        </NavLink>
                      </li>
                      <li>
                        <NavLink class="dropdown-item" to="/fromelements">
                          Form Elements
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink class="dropdown-item" to="about">
                          About US
                        </NavLink>
                      </li>
                      <li>
                        <NavLink class="dropdown-item" to="/service">
                          Service
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <NavLink class="nav-link ">Portfolio</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link ">Blog</NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink class="nav-link ">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
