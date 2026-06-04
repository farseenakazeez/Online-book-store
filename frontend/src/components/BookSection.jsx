import BookCard from "./BookCard";

export default function BookSection({ title, books }) {
  return (
    <section className=" pt-24 pb-24">
    <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold  text-zinc-900  text-center ">
        {title}
      </h2>

    
      <div className="flex flex-wrap  justify-center pb-4 gap-8">
        
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}

      </div>
    </div>
    </section>
  );
} 