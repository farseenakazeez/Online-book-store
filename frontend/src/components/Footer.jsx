export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              BookStore
            </h2>

            <p className="text-gray-400">
              Discover your next favorite book from our collection of
              fiction, romance, horror, self-growth, and finance books.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Home
              </li>
              <li className="hover:text-white cursor-pointer">
                Categories
              </li>
              <li className="hover:text-white cursor-pointer">
                Books
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400">
              📧 support@bookstore.com
            </p>

            <p className="text-gray-400 mt-2">
              📞 +91 98765 43210
            </p>
          </div>

        </div>

        <hr className="border-zinc-700 my-8" />

        <div className="text-center text-gray-500">
          © 2026 BookStore. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}