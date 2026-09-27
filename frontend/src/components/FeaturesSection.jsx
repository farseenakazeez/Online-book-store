import {
  Truck,
  ShieldCheck,
  BookOpen,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: <Truck size={28} />,
    title: "Fast Delivery",
    text: "Quick and reliable delivery",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Payment",
    text: "Safe and secure checkout",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Huge Collection",
    text: "Thousands of books to explore",
  },
  {
    icon: <BadgeDollarSign size={28} />,
    title: "Best Prices",
    text: "Great books at great prices",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-sm"
          >

            <div className="w-12 h-12 mx-auto rounded-full bg-[#f3eee7] flex items-center justify-center">
              {feature.icon}
            </div>

            <h3 className="font-bold mt-4 text-zinc-900">
              {feature.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {feature.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}