import {
  BookOpen,
  Flame,
  Brain,
  Briefcase,
  Landmark,
} from "lucide-react";

const categories = [
  {
    name: "Self Help",
    icon: <Brain size={32} />,
  },
  {
    name: " Motivation",
    icon: <Flame size={32} />,
  },
  {
    name: "Novel",
    icon: <BookOpen size={32} />,
  },
  {
    name: "Finance",
    icon: <Landmark size={32} />,
  },
  {
    name: "Productivity",
    icon: <Briefcase size={32} />,
  },
];

export default function Categories() {
  return (
    <div className="bg-stone-100 py-24 px-6 mb-28">

      <h2 className=" mb-16 text-4xl font-bold text-zinc-900  text-center">
        Browse Categories
      </h2>
      <div className="h-16"></div>

      <div className=" mt-20 grid grid-cols-5 gap-6 max-w-6xl mx-auto  mb-24  px-16 text-center">
        

        {categories.map((category, index) => (
          <div
            key={index}
            className=" w-44 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-1"
          >
            <div className="text-stone-700 mb-4 flex justify-center">
              {category.icon}
            </div>

            <h3 className="font-semibold text-zinc-800">
              {category.name}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}