import { Link, useParams } from "react-router-dom";
import { books } from "../../data/books";
import { ShoppingCart } from "lucide-react";

export default function BookDetailsPage() {

  const { id } = useParams();

  const book = books.find(
    (item) => item.id === Number(id)
  );

  if (!book) {
    return (
      <h1 className="text-center mt-20">
        Book Not Found
      </h1>
    );
  }

  return (
    <div className="bg-[#F8F5F0] min-h-screen  flex items-center justify-center pt-12 px-6">

      <div className="max-w-4xl mx-auto bg-white  rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 justify-center  px-6 py-10 ">

        {/* Image */}

        <div className="p-4 flex justify-start">

          <img
            src={book.image}
            alt={book.title}
            className="w-110 h-[450px] object-cover rounded-xl "
          />

        </div>

        {/* Details */}

        <div className="p-10">

          <span className=" px-4 py-2  text-[#6F4E37] font-bold">
            {book.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {book.title}
          </h1>

          <p className="text-xl text-gray-600 mt-3">
            by {book.author}
          </p>

          <p className="mt-4">
            ⭐ {book.rating}
          </p>

          <h2 className="text-4xl font-bold text-[#6F4E37] mt-6">
            ₹{book.price}
          </h2>

          <div className="mt-8">

            <h3 className="font-bold text-xl mb-3">
              Description
            </h3>

            <p className="text-gray-600 leading-7 font-medium">
              {book.description}
            </p>

          </div>
          <Link to ="/cart">

          <button className="mt-8 flex items-center gap-4 bg-[#6F4E37] hover:bg-[#5A3D2B] text-white px-12 py-12 rounded-2xl">

            <ShoppingCart size={28} />

            Add To Cart

          </button>
          </Link>

        </div>

      </div>

    </div>
  );
}