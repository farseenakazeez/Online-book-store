import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useGetBooksQuery } from "../../slices/bookApiSlice";
import BookCard from "../../components/BookCard";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const {
    data: books,
    isLoading,
    error,
  } = useGetBooksQuery();

  const categoryBooks =
    books?.filter(
      (book) =>
        book.category?.toLowerCase() ===
        categoryName?.toLowerCase()
    ) || [];

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
    <div className="min-h-screen bg-[#faf9f7] py-12">
      <div className="w-[92%] max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex
            items-center
            gap-2
            mb-8
            text-sm
            font-semibold
            text-zinc-700
            hover:text-black
            transition
          "
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700 mb-2">
            Bookify Collection
          </p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
            {categoryName} Books
          </h1>

          <p className="mt-3 text-gray-500">
            Explore our collection of {categoryName.toLowerCase()} books.
          </p>
        </div>

        {/* Books */}
        {categoryBooks.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
            <h2 className="text-xl font-semibold text-zinc-800">
              No books found
            </h2>

            <p className="mt-2 text-gray-500">
              There are no books available in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {categoryBooks.map((book) => (
              <BookCard
                key={book._id}
                book={book}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}