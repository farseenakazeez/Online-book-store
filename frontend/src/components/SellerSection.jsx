import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const perks = [
  "Publish your book with zero upfront cost",
  "Get listed in front of thousands of readers",
  "Full creative control over your content",
];


export default function SellerSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0">

            {/* Left — image side */}
            <div className="flex justify-center items-center bg-gray-100 py-12 px-8 min-h-[360px]">
              <img
                src="/books/seller.jpg"
                alt="Self publishing"
                className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Right — text side */}
            <div className="flex flex-col justify-center px-8 sm:px-12 py-12">
              <span className="text-sm text-gray-400 font-medium mb-2 tracking-wide">
                Become Our Partner
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Self - Publishing And <br /> Book Writing
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
                List your books, reach thousands of readers, and grow your
                income — all from one simple dashboard. No upfront fees,
                no hassle.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <BadgeCheck size={16} className="text-amber-500 shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 flex-wrap">
                <button  onClick={() => navigate("/seller/register")}
                className="bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold px-8 py-3 rounded-lg transition-all duration-300 tracking-widest uppercase">
                  Become a Seller Now
                </button>
                <button className="text-sm text-gray-400 hover:text-gray-900 underline underline-offset-4 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}