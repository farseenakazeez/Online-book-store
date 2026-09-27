import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../slices/bookApiSlice";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function BookDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
const navigate = useNavigate();
const addToCartHandler = () => {
  dispatch(
    addToCart({
      ...book,
      qty: 1,
    })
  );

  navigate("/cart");
};

  const {
    data: book,
    isLoading,
    error,
  } = useGetBookByIdQuery(id);

  if (isLoading)
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Something went wrong.
      </div>
    );

  return (
    <section className="bg-[#faf9f7] min-h-screen py-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14">

          {/* LEFT */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <img
                src={book.image}
                alt={book.title}
                className="w-[340px] h-[500px] object-contain"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold">
              {book.category}
            </span>

            <h1 className="text-5xl font-bold mt-4 text-gray-900">
              {book.title}
            </h1>

            <p className="text-xl text-gray-500 mt-2">
              by {book.author}
            </p>

            {/* Rating */}

            <div className="flex items-center gap-1 mt-5">

              <Star fill="#facc15" strokeWidth={0} size={20} />
              <Star fill="#facc15" strokeWidth={0} size={20} />
              <Star fill="#facc15" strokeWidth={0} size={20} />
              <Star fill="#facc15" strokeWidth={0} size={20} />
              <Star fill="#facc15" strokeWidth={0} size={20} />

              <span className="ml-2 text-gray-500">
                (120 Reviews)
              </span>

            </div>

            <h2 className="text-4xl font-bold mt-8 text-black">
              ₹ {book.price}
            </h2>

            <div className="mt-4">

              {book.stock > 0 ? (

                <span className="text-green-600 font-semibold">
                  In Stock ({book.stock} available)
                </span>

              ) : (

                <span className="text-red-600 font-semibold">
                  Out Of Stock
                </span>

              )}

            </div>

            <hr className="my-8" />

            <h3 className="text-2xl font-bold">
              Description
            </h3>

            <p className="text-gray-600 leading-8 mt-3">
              {book.description}
            </p>

            {/* Quantity */}

            <div className="mt-10">

              <h4 className="font-semibold mb-3">
                Quantity
              </h4>

              <select className="border rounded-lg px-4 py-3 w-28">

                {[...Array(book.stock).keys()].map((x) => (

                  <option key={x + 1}>
                    {x + 1}
                  </option>

                ))}

              </select>

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

              <button onClick={addToCartHandler}
                className="flex items-center gap-3 bg-black hover:bg-zinc-800 text-white px-8 py-4 rounded-xl transition"
              >
                <ShoppingCart size={22} />
                Add To Cart
              </button>

              <button
                className="border-2 border-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition"
              >
                Buy Now
              </button>

              <button
                className="border p-4 rounded-xl hover:bg-gray-100"
              >
                <Heart size={22} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}