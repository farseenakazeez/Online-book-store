import BookCard from "./BookCard";

export default function BookSection({ title, books }) {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <section className="w-full">

      {/* Section heading */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900">
          {title}
        </h2>

        <button className="text-sm font-medium text-gray-500 hover:text-black transition">
          View All →
        </button>
      </div>

      {/* Books */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
          />
        ))}
      </div>

    </section>
  );
}