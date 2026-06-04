import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, House } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold pl-6">
            Bookify
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex w-[450px] lg:w-[550px]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full bg-white text-black rounded-lg py-3 px-5 pr-12 outline-none"
              />

              <Search
                size={18}
                className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500"
              />
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-6 mr-6">

            <Link to="/">
              <House size={24} />
            </Link>

            <Link to="/cart">
              <ShoppingCart size={24} />
            </Link>

            <Link
              to="/login"
              className="hover:text-indigo-300 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hover:text-indigo-300 transition"
            >
              Register
            </Link>

          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4 mr-4">

            <Link to="/cart">
              <ShoppingCart size={24} />
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-800 px-4 py-4 space-y-4">

            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full bg-white text-black rounded-lg py-2 px-4 pr-10 outline-none"
              />

              <Search
                size={18}
                className="absolute right-3 top-3 text-gray-500"
              />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-3">

              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>

              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>

              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}