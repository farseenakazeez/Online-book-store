import { useGetBooksQuery } from "../../slices/bookApiSlice.js";
import Categories from "../../components/Categories.jsx";
import BookSection from "../../components/BookSection.jsx";
import Footer from "../../components/Footer.jsx";
import HeroSlider from "../../components/HeroSlider.jsx";
import SellerSection from "../../components/SellerSection.jsx";
import FeaturesSection from "../../components/FeaturesSection.jsx";
import NewsletterSection from "../../components/NewsLetterSection.jsx";

export default function HomePage() {
  const {
    data: books,
    isLoading,
    error,
  } = useGetBooksQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f7]">
        <h1 className="text-xl font-semibold">
          Loading Books...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f7]">
        <h1 className="text-xl text-red-500">
          Error Loading Books
        </h1>
      </div>
    );
  }

  return (
    
  <div className="w-full">

    {/* HERO */}
    <div className="py-8 sm:py-10">
      <HeroSlider />
    </div>

    {/* CATEGORIES */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <Categories />
    </section>

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <hr className="border-gray-200" />
    </div>

    {/* TOP SELLING */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <BookSection
        title="Top Selling Books"
        books={books?.filter((book) => book.topSelling) || []}
      />
    </section>

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <hr className="border-gray-200" />
    </div>

    {/* TRENDING */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <BookSection
        title="Trending Now"
        books={books?.filter((book) => book.trendingnow) || []}
      />
    </section>

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <hr className="border-gray-200" />
    </div>

    {/* RECOMMENDED */}
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <BookSection
        title="Recommended For You"
        books={books?.filter((book) => book.recommended) || []}
      />
    </section>

    {/* SELLER */}
    <div className="py-8">
      <SellerSection />
    </div>

    {/* FEATURES */}
    <div className="py-8">
      <FeaturesSection />
    </div>

    {/* NEWSLETTER */}
    <div className="py-8">
      <NewsletterSection />
    </div>

    <Footer />
  </div>
);

}