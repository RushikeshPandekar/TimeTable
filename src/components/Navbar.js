import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Navbar() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home">
            TimeTable
          </Link>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              {authCtx.userCompleteDetails.empId !== "" && (
                <li class="nav-item">
                  <Link class="nav-link" to="/addLect">
                    Add-Lecture
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
