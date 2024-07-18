//Importing all the use full packages and components
import React from "react";

function Navbar(props) {
  return (
    //Navbar JSX is written here
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* Navbar title */}
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        {/* Navbar toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* All the nav links  */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Navbar home item */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>

            {/* Navbar about item */}
            <li className="nav-item">
              <a className="nav-link" href="/About">
                {props.about}
              </a>
            </li>

            {/* Navbar dropdown item */}
            <li className="nav-item dropdown">
              {/* Dropdown toggle button */}
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.dropdown}
              </a>

              {/* Dropdown menu */}
              <ul className="dropdown-menu">
                {/* Dropdown Item 1 */}
                <li>
                  <a className="dropdown-item" href="/">
                    {props.action}
                  </a>
                </li>

                {/* Dropdown Item 2 */}
                <li>
                  <a className="dropdown-item" href="/">
                    {props.anotherAction}
                  </a>
                </li>

                {/* Dropdown Item 3 */}
                <li>
                  <hr className="dropdown-divider" />
                </li>

                {/* Dropdown Item 4 */}
                <li>
                  <a className="dropdown-item" href="/">
                    {props.somethingElse}
                  </a>
                </li>
              </ul>
            </li>

            {/* Disable icon button */}
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="/">
                {props.disabled}
              </a>
            </li>
          </ul>

          {/* Searchbar component */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              {props.search}
            </button>
          </form>
        </div>
      </div>

      {/* Switch for the dark mode */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onClick={props.toggleMode}
        />
        <label
          className={`form-check-label text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          htmlFor="flexSwitchCheckChecked"
        >
          Enable dark mode
        </label>
      </div>
    </nav>
  );
}

//Exporting Navbar component
export default Navbar;
