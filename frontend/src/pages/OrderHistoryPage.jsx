import { useGetMyOrdersQuery } from "../slices/orderApiSlice";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrderHistoryPage() {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-900 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 text-sm">Failed to load orders.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          My Orders
        </h1>

        {orders?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Package size={48} className="text-gray-300" />
            <p className="text-gray-500 font-medium">
              You have no orders yet.
            </p>
            <Link to="/">
              <button className="bg-gray-900 hover:bg-amber-500 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300">
                Start Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {orders?.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Order ID</p>
                    <p className="text-sm font-bold text-gray-700">
                      {order._id}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-3 mb-4">
                  {order.orderItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-16 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          Qty: {item.qty}
                        </p>
                      </div>
                      <p className="text-sm font-bold text-gray-900 shrink-0">
                        ₹ {item.qty * item.price}
                      </p>
                    </div>
                  ))}
                </div>

                <hr className="border-gray-100 my-3" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Payment</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {order.paymentMethod}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Total</p>
                    <p className="text-base font-extrabold text-gray-900">
                      ₹ {order.totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}