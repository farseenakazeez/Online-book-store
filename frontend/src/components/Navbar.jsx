import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  House,
  User,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/authApiSlice";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logged-in user
  const { userInfo } = useSelector((state) => state.auth);

  // Cart
  const { cartItems } = useSelector((state) => state.cart);

  // Logout API
  const [logoutApi] = useLogoutMutation();

  // Calculate cart quantity
  const cartCount = cartItems?.reduce(
    (total, item) => total + item.qty,
    0
  ) || 0;

  // Logout
  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      setProfileOpen(false);
      setMenuOpen(false);
      navigate("/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <nav className="bg-zinc-900 text-white shadow-md sticky top-0 z-50 w-full">
      {/* Outer container with standard horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight shrink-0"
          >
            Bookify
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full bg-white text-black rounded-lg py-2.5 px-4 pr-10 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            {/* HOME */}
            <Link to="/">
              <House
                size={22}
                className="hover:text-gray-300 transition"
              />
            </Link>

            {/* CART */}

            {userInfo && (
              <Link to="/cart" className="relative p-1">
                <ShoppingCart size={22} className="hover:text-gray-300 transition" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {/* USER / AUTH */}
            {userInfo ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 hover:text-gray-300 transition font-medium"
                >
                  <User size={20} />
                  <span>{userInfo.name}</span>
                  <ChevronDown size={16} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white text-black rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600 font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4 text-sm font-medium">
                <Link
                  to="/login"
                  className="hover:text-gray-300 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE & CART */}
          <div className="flex md:hidden items-center gap-4">
            {/* MOBILE CART — only for logged in users */}
            {userInfo && (
              <Link to="/cart" className="relative p-1">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 focus:outline-none"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-800 border-t border-zinc-700 px-4 py-4 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full bg-white text-black rounded-lg py-2 px-4 pr-10 outline-none text-sm"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          <div className="flex flex-col space-y-3 pt-2 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300"
            >
              Home
            </Link>

            {userInfo ? (
              <>
                <div className="flex items-center gap-2 border-t border-zinc-700 pt-3 text-zinc-400">
                  <User size={18} />
                  <span>{userInfo.name}</span>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-300 pl-2"
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-300 pl-2"
                >
                  My Orders
                </Link>
                <button
                  onClick={logoutHandler}
                  className="text-left text-red-400 font-medium pl-2 pt-1"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 border-t border-zinc-700 pt-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}