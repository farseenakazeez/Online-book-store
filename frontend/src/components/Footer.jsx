import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white pt-16 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-8 bg-amber-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                B
              </div>
              <h2 className="text-lg font-extrabold tracking-tight">
                Book Worms
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover your next favorite book from our collection of
              fiction, romance, horror, self-growth, and finance books.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Books", "Deals", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to="/"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-base font-semibold mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              {["Bestsellers", "On Sale", "Editors Pick", "Best Of 2024", "Featured"].map((link) => (
                <li key={link}>
                  <Link
                    to="/"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-base font-semibold mb-5">Help</h3>
            <ul className="space-y-3 text-sm">
              {["Track Order", "Delivery & Returns", "FAQs", "Community"].map((link) => (
                <li key={link}>
                  <Link
                    to="/"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-xs text-center sm:text-left">
            Copyright © 2026 Book Worms | Powered by Book Worms
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {["MC", "VISA", "AMEX", "APay", "GPay"].map((p) => (
              <span
                key={p}
                className="bg-gray-700 text-gray-300 text-[10px] font-bold px-2 py-1 rounded"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
              facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
              twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
              instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}