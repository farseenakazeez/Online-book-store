import {
  LayoutDashboard,
  BookOpen,
  ShoppingBag,
  Users,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
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
      name: "Users",
      path: "/admin/users",
      icon: Users,
    },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-zinc-900 text-white flex-col">

      {/* LOGO */}

      <div className="h-20 flex items-center px-6 border-b border-zinc-700">

        <h1 className="text-2xl font-bold">
          Bookify
        </h1>

      </div>


      {/* MENU */}

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
                    : "hover:bg-zinc-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}

      </nav>


      {/* LOGOUT */}

      <div className="p-4 border-t border-zinc-700">

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-zinc-800 text-red-400">

          <LogOut size={20} />

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}