import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-4 py-10">

      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side Image */}

        <div className="hidden md:block relative">

          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80"
            alt="Library"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">

            <h2 className="text-5xl font-bold text-white">
              Bookify
            </h2>

            <p className="text-white mt-3 text-xl font-bold">
              A reader lives a thousand lives before he dies.
            </p>

          </div>

        </div>

        {/* Right Side Form */}

        <div className="p-10 flex flex-col justify-center">

          <div className="flex justify-center mb-8">
            <BookOpen size={50} className="text-[#6F4E37]" />
          </div>

          <h1 className="text-2xl font-bold text-center text-[#2C2C2C]">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-6 mb-12">
            Continue your reading journey
          </p>

          <form className="space-y-5">
            <div className="flex flex-col gap-4 items-center ">
                 <input
              type="email"
              placeholder="Email Address"
              className="w-[320px] border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F4E37]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-[320px] border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6F4E37]"
            />

            <button
              className="w-[320px] bg-[#6F4E37] hover:bg-[#5A3D2B] text-white py-3 rounded-xl font-semibold transition"
            >
              Login
            </button>


            </div>

           
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#6F4E37] font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}