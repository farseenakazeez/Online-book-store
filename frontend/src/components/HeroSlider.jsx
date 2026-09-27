import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      title: "Atomic Habits",
      tagline: "You are only one book away from a good mood.",
      description:
        "Tiny changes, remarkable results. Build better habits and transform your life.",
      image: "/books/atomic-habits.png",
    },
    {
      title: "Rich Dad Poor Dad",
      tagline: "Change the way you think about money.",
      description:
        "Learn powerful lessons about money, investing and financial freedom.",
      image: "/books/richdadpoordadcover.png",
    },
    {
      title: "The Psychology of Money",
      tagline: "Understand money. Understand yourself.",
      description:
        "Timeless lessons about wealth, greed and happiness.",
      image: "/books/psychologyofmoneycover.png",
    },
    {
      title: "The Alchemist",
      tagline: "Follow your dreams. Find your destiny.",
      description:
        "A magical story about following your dreams and discovering your purpose.",
      image: "/books/alchemistcover.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const next = () => {
    setCurrent(
      (prev) => (prev + 1) % slides.length
    );
  };

  const slide = slides[current];

  return (
    <section className="w-[92%] max-w-7xl mx-auto">

      <div className="relative overflow-hidden rounded-3xl bg-[#eee3d3]">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[430px] md:min-h-[500px] px-8 sm:px-12 lg:px-20 py-12">

          {/* TEXT */}
          <div className="order-2 md:order-1 text-center md:text-left">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700 mb-4">
                  Featured Book
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-zinc-900 leading-tight max-w-xl">
                  {slide.tagline}
                </h1>

                <h2 className="mt-4 text-lg sm:text-xl font-bold text-zinc-800">
                  {slide.title}
                </h2>

                <p className="mt-4 max-w-md mx-auto md:mx-0 text-gray-600 leading-relaxed">
                  {slide.description}
                </p>

                <button className="mt-7 inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition">
                  Shop Now
                  <ArrowRight size={18} />
                </button>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* BOOK IMAGE */}
          <div className="order-1 md:order-2 flex justify-center items-center">

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slide.image}
                alt={slide.title}
                className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] max-h-[350px] object-contain drop-shadow-2xl"
                initial={{
                  opacity: 0,
                  x: 40,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                  scale: 0.9,
                }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>

          </div>

        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-zinc-900 hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-zinc-900 hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-7 bg-zinc-900"
                  : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}