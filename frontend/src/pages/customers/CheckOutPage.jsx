import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../slices/cartSlice";
import { useCreateOrderMutation } from "../../slices/orderApiSlice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: userInfo?.name || "",
    email: userInfo?.email || "",
    phone: "",
    address: "",
    paymentMethod: "Cash On Delivery",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [createOrder] = useCreateOrderMutation();

  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  const shippingPrice = 0;
  const totalPrice = itemsPrice + shippingPrice;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrderHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const order = await createOrder({
        customerInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        orderItems: cartItems.map((item) => ({
          title: item.title,
          qty: item.qty,
          image: item.image,
          price: item.price,
          book: item._id,
        })),
        shippingAddress: {
          address: formData.address,
        },
        paymentMethod: formData.paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
      }).unwrap();
      navigate(`/order/success/${order._id}`);
      dispatch(clearCart());
     
    } catch (err) {
      setError(err?.data?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };
  // ✅ Only redirect if no order is being placed
if (cartItems.length === 0 && !loading) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-gray-500 text-lg font-medium mb-4">
          Your cart is empty
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-900 hover:bg-amber-500 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Checkout
        </h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={placeOrderHandler}>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Left — Shipping Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h2 className="text-lg font-extrabold text-gray-900 mb-2">
                Shipping Details
              </h2>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={changeHandler}
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  required
                  placeholder="john@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={changeHandler}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Shipping Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={changeHandler}
                  required
                  rows={3}
                  placeholder="House no, Street, City, State, Pincode"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={changeHandler}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                >
                  <option>Cash On Delivery</option>
                  <option>Online Payment</option>
                </select>
              </div>
            </div>

            {/* Right — Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit sticky top-24">
              <h2 className="text-lg font-extrabold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 shrink-0">
                      ₹ {item.qty * item.price}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-100 my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>₹ {itemsPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
              </div>

              <hr className="border-gray-100 my-4" />

              <div className="flex justify-between font-extrabold text-gray-900">
                <span>Total</span>
                <span>₹ {totalPrice}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-gray-900 hover:bg-amber-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}