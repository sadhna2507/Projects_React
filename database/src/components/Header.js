import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
function Header({ changeUrl }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className="header header-light">
      <div className="container container-light">
        <nav className="navbar">
          <h1>
            <Link className="brand brand-light" to="/">
              News App
            </Link>
          </h1>

          <ul className="nav-links nav-links-light">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/headlines">Headlines</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <button className="toggle-theme light">
              <i className="fas fa-moon fa-2x"></i>
            </button>
          </ul>
          <form onSubmit={(e) => changeUrl(e, value)}>
            <div className="search">
              <input
                type="text"
                className="search-term search-term-light"
                placeholder="Search News"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="search-button search-button-light">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default Header;
