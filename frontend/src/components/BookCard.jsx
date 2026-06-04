 import { Link } from "react-router-dom";
 export default function BookCard({ book }) {
    console.log(book);
  return (


    <Link to={`/book/${book.id}`} >
        
    <div className=" w-60 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300  text-center">
      
      <img
        src={book.image} 
        alt={book.title}
        className="w-full h-50 object-cover"
      />

      <div className="p-5 text-center space-y-2">
        <h2 className="text-lg font-bold text-gray-800">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {book.author}
        </p>

        <p className="text-black font-bold mt-2">
          ₹ {book.price}
        </p>

        <button className="mt-4 w-full bg-black hover:bg-black text-white py-3 rounded-lg  hover:bg-zinc-800 transition">
          Add To Cart
        </button>
      </div>
    </div>
    </Link>
  );
}