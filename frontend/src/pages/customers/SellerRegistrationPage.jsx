import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Store, ArrowLeft, Plus, Trash2 } from "lucide-react";

const categories = [
  "Self Help",
  "Fiction / Novel",
  "Finance",
  "Motivation",
  "Productivity",
  "Children Books",
  "Biography",
  "History",
  "Science",
  "Other",
];

export default function SellerRegisterPage() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: userInfo?.name || "",
    email: userInfo?.email || "",
    phone: "",
    reason: "",
  });

  const [books, setBooks] = useState([
    { bookName: "", category: "", quantity: "", description: "" },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const bookChangeHandler = (index, e) => {
    const updated = [...books];
    updated[index][e.target.name] = e.target.value;
    setBooks(updated);
  };

  const addBook = () => {
    setBooks([...books, { bookName: "", category: "", quantity: "", description: "" }]);
  };

  const removeBook = (index) => {
    if (books.length === 1) return;
    setBooks(books.filter((_, i) => i !== index));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { ...formData, books };
    console.log("Seller Application Payload:", payload);

    // TODO: await applyAsSellerApi(payload)

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Store size={28} className="text-amber-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Thank you for applying! Our admin team will review your
            application and get back to you within 2-3 business days
            via email.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-900 hover:bg-amber-500 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition mb-6"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Store size={26} className="text-amber-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Apply as a Seller
          </h1>
          <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto">
            Fill in your details and the books you wish to sell.
            Admin will review and approve your application.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={submitHandler} className="space-y-6">

            {/* ── PERSONAL DETAILS ── */}
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Personal Details
            </h3>

            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={changeHandler}
                required
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Email Address <span className="text-red-400">*</span>
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

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Phone Number <span className="text-red-400">*</span>
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

            <hr className="border-gray-100" />

            {/* ── BOOKS TO SELL ── */}
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Books to Sell
              </h3>
              <button
                type="button"
                onClick={addBook}
                className="flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-amber-600 transition"
              >
                <Plus size={14} />
                Add Another Book
              </button>
            </div>

            <div className="space-y-5">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-4 relative"
                >
                  {/* Remove button */}
                  {books.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBook(index)}
                      className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}

                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Book {index + 1}
                  </p>

                  {/* Book Name */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">
                      Book Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="bookName"
                      value={book.bookName}
                      onChange={(e) => bookChangeHandler(index, e)}
                      required
                      placeholder="e.g. Atomic Habits"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    />
                  </div>

                  {/* Category + Quantity side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1 block">
                        Category <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="category"
                        value={book.category}
                        onChange={(e) => bookChangeHandler(index, e)}
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        {categories.map((cat) => (
                          <option key={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1 block">
                        Approx. Quantity <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={book.quantity}
                        onChange={(e) => bookChangeHandler(index, e)}
                        required
                        min="1"
                        placeholder="e.g. 100"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Short Description */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">
                      Short Description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={book.description}
                      onChange={(e) => bookChangeHandler(index, e)}
                      required
                      rows={2}
                      placeholder="Brief description about this book..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
                    />
                  </div>

                </div>
              ))}
            </div>

            <hr className="border-gray-100" />

            {/* ── WHY JOIN BOOKIFY ── */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Why Bookify?
              </h3>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Why do you want to sell on Bookify? <span className="text-red-400">*</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={changeHandler}
                required
                rows={3}
                placeholder="Share your motivation for joining our platform..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
              />
            </div>

            {/* Notice */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-xs text-amber-700 leading-relaxed">
              📋 Your application will be reviewed by our admin team. You
              will receive an email once approved. This typically takes
              2-3 business days.
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-amber-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}