import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../slices/cartSlice";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const increaseQty = (item) => {
    dispatch(addToCart({ ...item, qty: item.qty + 1 }));
  };

  const decreaseQty = (item) => {
    if (item.qty === 1) {
      dispatch(removeFromCart(item._id));
    } else {
      dispatch(addToCart({ ...item, qty: item.qty - 1 }));
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-black transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-8">
          Shopping Cart
          <span className="ml-3 text-lg font-medium text-gray-400">
            ({totalItems} {totalItems === 1 ? "item" : "items"})
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-xl font-semibold text-gray-500">
              Your cart is empty
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-amber-500 transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex gap-5 items-center"
                >
                  {/* Book Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 sm:w-24 h-28 sm:h-32 object-cover rounded-xl shrink-0"
                  />

                  {/* Book Info */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.author}
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-2">
                      ₹ {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQty(item)}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="text-sm font-bold w-6 text-center">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item)}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Right side — subtotal + remove */}
                  <div className="flex flex-col items-end justify-between h-full gap-4 shrink-0">
                    <p className="text-sm font-bold text-gray-900">
                      ₹ {item.qty * item.price}
                    </p>
                    <button
                      onClick={() => removeHandler(item._id)}
                      className="text-red-400 hover:text-red-600 transition"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit sticky top-24">
              <h2 className="text-xl font-extrabold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Items ({totalItems})</span>
                  <span>₹ {totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Delivery</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
              </div>

              <hr className="my-4 border-gray-100" />

              <div className="flex justify-between font-extrabold text-gray-900 text-base">
                <span>Total</span>
                <span>₹ {totalPrice}</span>
              </div>

              <Link to="/checkout">
                <button className="mt-6 w-full bg-gray-900 hover:bg-amber-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300">
                  Proceed To Checkout
                </button>
              </Link>

              <button
                onClick={() => navigate("/")}
                className="mt-3 w-full border border-gray-200 text-gray-600 hover:border-gray-400 py-3 rounded-xl font-medium text-sm transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}