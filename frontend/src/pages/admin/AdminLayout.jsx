import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      <AdminSidebar />

      <main className="flex-1 min-w-0">

        <div className="md:hidden h-16 bg-zinc-900 text-white flex items-center px-4">
          <h1 className="text-xl font-bold">
            Bookify Admin
          </h1>
        </div>

        <Outlet />

      </main>

    </div>
  );
}