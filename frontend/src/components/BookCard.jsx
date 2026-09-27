import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const addToCartHandler = (e) => {
    e.preventDefault();

    // ✅ if not logged in redirect to login
    if (!userInfo) {
      navigate("/login");
      return;
    }

    dispatch(addToCart({
      _id: book._id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      qty: 1,
    }));

    navigate("/cart");
  };

  return (
    <Link to={`/book/${book._id}`} className="block h-full">
      <div className="h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

        {/* Image */}
        <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1 gap-1">
          <h2 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
            {book.title}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">{book.author}</p>
          <p className="text-sm font-bold text-gray-900 mt-1">
            ₹ {book.price}
          </p>

          <button
            onClick={addToCartHandler}
            className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-amber-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-300"
          >
            <ShoppingCart size={14} />
            {userInfo ? "Add to Cart" : "Login to Buy"}
          </button>
        </div>

      </div>
    </Link>
  );
}