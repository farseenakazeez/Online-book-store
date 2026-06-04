export default function Hero() {
  return (
    <div
      className="h-[75vh] mb-28 bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1503372066/photo/many-books-stacked-with-blurred-background-of-bookstore-full-of-books-photo-with-copyspace.jpg?s=612x612&w=0&k=20&c=FI9RseCP2ygrGafI-J5yQYpmd1JB1XZcy0kVELu8s1c=')",
      }}
    >
      <div className="p-10 rounded-2xl text-center max-w-2xl">
        
        <h1 className="text-5xl text-black font-bold mb-4">
          Discover Your Next Favorite Book
        </h1>

        <p className="text-lg text-black font-bold mb-6">
          Explore thousands of books from fiction to self-growth,
          all in one place.
        </p>

       

      </div>
    </div>
  );
}