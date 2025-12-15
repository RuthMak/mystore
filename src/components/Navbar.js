import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-rooted-green text-rooted-offwhite">
      {/* Top bar */}
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ROOTED logo" className="h-10 w-auto" />
          <span className="font-bold text-xl tracking-wide">ROOTED</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-3xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-rooted-green px-6 pb-6 pt-4 space-y-4 font-medium">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-rooted-offwhite"
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() => setOpen(false)}
            className="block text-rooted-offwhite"
          >
            Shop
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="block text-rooted-offwhite"
          >
            Services
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block text-rooted-offwhite"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-rooted-offwhite"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
