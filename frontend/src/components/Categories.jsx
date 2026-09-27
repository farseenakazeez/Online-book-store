import {
  BookOpen,
  Flame,
  Brain,
  Briefcase,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Self Help",
    icon: <Brain size={26} />,
  },
  {
    name: "Motivation",
    icon: <Flame size={26} />,
  },
  {
    name: "Novel",
    icon: <BookOpen size={26} />,
  },
  {
    name: "Finance",
    icon: <Landmark size={26} />,
  },
  {
    name: "Productivity",
    icon: <Briefcase size={26} />,
  },
];

export default function Categories() {
  return (
    <div className="w-full">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700 mb-2">
          Explore
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
          Browse Categories
        </h2>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">

        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${encodeURIComponent(category.name)}`}
            className="
              bg-white
              border border-gray-200
              rounded-2xl
              min-h-[120px]
              px-4 py-6
              flex flex-col
              items-center
              justify-center
              gap-3
              text-center
              shadow-sm
              hover:shadow-md
              hover:-translate-y-1
              transition-all duration-300
              cursor-pointer
            "
          >
            <div className="w-11 h-11 rounded-full bg-[#f5efe7] flex items-center justify-center text-zinc-800">
              {category.icon}
            </div>

            <h3 className="text-sm font-semibold text-zinc-800">
              {category.name}
            </h3>
          </Link>
        ))}

      </div>
    </div>
  );
}