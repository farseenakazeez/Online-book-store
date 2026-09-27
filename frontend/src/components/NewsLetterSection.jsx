export default function NewsletterSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-12">
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative min-h-[340px]"
        style={{ background: "linear-gradient(135deg, #f5deb3 0%, #e8c97a 100%)" }}
      >
        {/* Decorative watermark circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-10 -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white opacity-10 translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-8 sm:px-12 md:px-16 py-14">

          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Join Book Lovers <br />
              Community and Get <br />
              Latest Updates
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-5 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold px-8 py-3 rounded-lg transition-all duration-300 tracking-widest uppercase">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right — stacked books visual */}
          <div className=" relative flex justify-center items-end  h-[260px]">
            <img
              src="/books/alchemistcover.png"
              alt="Book"
              className="absolute w-[140px] sm:w-[160px] h-auto object-contain drop-shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{ bottom: 0, right: "54%", transform: "rotate(-8deg)" }}
            />
            <img
              src="/books/richdadpoordadcover.png"
              alt="Book"
              className="absolute w-[155px] sm:w-[175px] h-auto object-contain drop-shadow-2xl"
              style={{ bottom: 0, right: "30%", transform: "rotate(4deg)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}