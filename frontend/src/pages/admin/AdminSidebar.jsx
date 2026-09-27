import {
  LayoutDashboard,
  BookOpen,
  ShoppingBag,
  Users,
  Store,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useLogoutMutation } from "../../slices/authApiSlice";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApi] = useLogoutMutation();

  const links = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Books",
      path: "/admin/books",
      icon: BookOpen,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: ShoppingBag,
    },
    {
      name: "Customers",
      path: "/admin/customers",
      icon: Users,
    },
    {
      name: "Sellers",
      path: "/admin/sellers",
      icon: Store,
    },
  ];

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();

      dispatch(logout());

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white flex flex-col">

      {/* LOGO */}

      <div className="h-20 flex items-center px-6 border-b border-zinc-700">
        <h1 className="text-2xl font-bold">
          Bookify Admin
        </h1>
      </div>

      {/* NAVIGATION */}

      <nav className="flex-1 p-4 space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-zinc-900"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span>
                {link.name}
              </span>
            </NavLink>
          );
        })}

      </nav>

      {/* LOGOUT */}

      <div className="p-4 border-t border-zinc-700">

        <button
          onClick={logoutHandler}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-zinc-800 transition"
        >
          <LogOut size={20} />

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}