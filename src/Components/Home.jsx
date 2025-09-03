import React, { useState } from "react";
import { ArrowLeft} from "lucide-react";

function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  // Fetch books from API
  const fetchBooks = async () => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 9));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setBooks([]);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.pixabay.com/video/2023/10/15/185096-874643413_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col items-center justify-center h-full px-4">
        {/* Search Box */}
        <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-center text-brown-200 mb-4">
            BookHunt
          </h1>

          <button
            onClick={clearSearch}
            className="flex items-center gap-2 px-3 py-2 my-3 rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="flex">
            <input
              type="text"
              placeholder="Enter book title..."
              className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={fetchBooks}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>
          {/* Search Results */}
          <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
            {books.length > 0 ? (
              books.map((book, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
                >
                  <h2 className="font-semibold text-gray-800">{book.title}</h2>
                  <p className="text-sm text-gray-600">
                    Author:{" "}
                    {book.author_name ? book.author_name.join(", ") : "Unknown"}
                  </p>
                  <p className="text-sm text-gray-600">
                    First Published: {book.first_publish_year || "N/A"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No results yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
