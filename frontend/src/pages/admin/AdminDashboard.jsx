import {
  BookOpen,
  ShoppingBag,
  Users,
  IndianRupee,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Books",
      value: "120",
      icon: BookOpen,
    },
    {
      title: "Total Orders",
      value: "45",
      icon: ShoppingBag,
    },
    {
      title: "Total Users",
      value: "230",
      icon: Users,
    },
    {
      title: "Total Revenue",
      value: "₹85,450",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* TITLE */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Here's what's happening with Bookify.
          </p>
        </div>


        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-white rounded-xl shadow-sm p-6"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      {stat.title}
                    </p>

                    <h2 className="text-2xl font-bold mt-2">
                      {stat.value}
                    </h2>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Icon size={24} />
                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* RECENT ORDERS */}

        <div className="bg-white rounded-xl shadow-sm mt-8 p-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl font-bold">
              Recent Orders
            </h2>

            <button className="text-sm text-blue-600 hover:underline">
              View All
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b">
                  <th className="py-3">Order ID</th>
                  <th className="py-3">Customer</th>
                  <th className="py-3">Amount</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-4">#BK001</td>
                  <td className="py-4">John</td>
                  <td className="py-4">₹1,250</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Delivered
                    </span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">#BK002</td>
                  <td className="py-4">Anu</td>
                  <td className="py-4">₹850</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      Processing
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}