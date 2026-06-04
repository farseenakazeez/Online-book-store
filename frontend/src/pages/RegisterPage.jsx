import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-4 py-10">

      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side Image */}

        <div className="hidden md:block relative ">

          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
            alt="Bookshelf"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8 ">

            <h2 className="text-5xl font-bold text-white">
              Join Bookify
            </h2>

            <p className="text-white font-bold text-xl mt-3">
              Discover, explore and share your favorite books.
            </p>

          </div>

        </div>

        {/* Right Side Form */}

        <div className=" p-16 flex flex-col justify-center">

          <div className="flex justify-center mb-6 ">
            <BookOpen size={50} className="text-[#6F4E37]" />
          </div>

          <h1 className="text-2xl font-bold text-center text-[#2C2C2C]">
            Create Account
          </h1>

          <p className="text-center text-gray-900 mt-2 mb-10">
            Start your reading journey today
          </p>

          <form className="space-y-4">
            <div className=" flex flex-col gap-4 items-center ">

            <input
              type="text"
              placeholder="Full Name"
              className="w-[320px] border border-gray-300 rounded-xl   pl-5  py-3 focus:outline-none focus:border-[#6F4E37]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className=" w-[320px] border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F4E37]"
            />

            <input
              type="password"
              placeholder="Password"
              className="  w-[320px] border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F4E37]"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className=" w-[320px]    border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F4E37]"
            />

            <select
              className=" w-[320px]   border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F4E37]"
            >
              <option value="">Select Role</option>
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </select>

            <button
              type="submit"
              className=" w-[320px] bg-[#6F4E37] hover:bg-[#5A3D2B] text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Create Account
            </button>
            </div>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#6F4E37] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}