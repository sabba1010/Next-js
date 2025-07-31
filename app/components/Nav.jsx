"use client";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Dashboard", "AddMeal", "AddExpense", "Deposit"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-black shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white cursor-pointer">MealManager</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium text-white hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl font-bold text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-white hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
