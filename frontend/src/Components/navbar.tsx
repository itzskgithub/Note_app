
import { Link, useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";
import "./navbar.css";

interface NavbarProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ search, setSearch }: NavbarProps) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username") || "User";

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/home");
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <Link to="/home" className="navbar-logo">
        <span className="logo-icon">N</span>
        <span>Note_App</span>
      </Link>

      {/* Center: Search */}
      <div className="navbar-search">
        <span className="search-icon">⌕</span>
        <input
          type="search"
          placeholder="Search your notes..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* Right: User and Auth Buttons */}
      <div className="navbar-actions">
        {token && (
          <span className="navbar-username">
            👤 {username}
          </span>
        )}

        {!token ? (
          <>
            <Link to="/login" className="btn btn-login">
              Login
            </Link>
            <Link to="/signup" className="btn btn-signup">
              Signup
            </Link>
          </>
        ) : (
          <button
            className="btn btn-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
