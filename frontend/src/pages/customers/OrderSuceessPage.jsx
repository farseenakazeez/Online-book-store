import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">

        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          Thank You for Shopping!
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          Your order has been placed successfully. We will process
          it and get it delivered to you soon.
        </p>

        <p className="text-xs text-gray-400 mb-8">
          Order ID:{" "}
          <span className="font-semibold text-gray-600">{id}</span>
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/orders">
            <button className="w-full bg-gray-900 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300">
              View My Orders
            </button>
          </Link>

          <Link to="/">
            <button className="w-full border border-gray-200 text-gray-600 hover:border-gray-400 py-3 rounded-xl font-medium text-sm transition-all duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}