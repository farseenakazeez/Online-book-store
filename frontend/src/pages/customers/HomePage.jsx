import  { books }from "../../data/books";
import BookCard from "../../components/BookCard.jsx";
import Navbar from "../../components/Navbar.jsx";
import Hero from "../../components/Hero.jsx";
import Categories from "../../components/Categories.jsx";
import BookSection from "../../components/BookSection.jsx";
import Footer from "../../components/Footer.jsx";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-10">
        
      </div>
      <Hero />
      <div className="h-20"></div>
      <div className="mt-24">
        <Categories />
      </div>

      <div className="h-20"></div>
      <div className=" mt-32 ">
        <BookSection title="Top Selling Books" books={books} />
        <div className="h-32"></div>
        <BookSection title="Trending Now" books={books} />
        <div className="h-32"></div>
        <BookSection title="Recommended For You" books={books} />
      </div>

      <Footer />

    </div>
  );
}