import React from "react";
import { BookOpen, Users, Globe } from "lucide-react";

function About() {
  return (
    <section className="flex justify-center items-center min-h-screen w-full bg-[#E6CFA9] px-6 py-12">
      <div className="max-w-5xl bg-white shadow-2xl rounded-2xl my-10 p-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-yellow-700">BookHunt</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          📚 BookHunt is your trusted companion to discover, explore, and connect 
          with books from around the world. Whether you’re looking for timeless 
          classics, modern bestsellers, or hidden gems, FindBook makes the journey 
          of finding your next read easier and more enjoyable.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#FFF6E0] rounded-xl shadow-md p-6 hover:scale-105 transition">
            <BookOpen className="w-12 h-12 text-yellow-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Wide Collection</h3>
            <p className="text-gray-600 mt-2">
              Browse through thousands of books across all genres and categories.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF6E0] rounded-xl shadow-md p-6 hover:scale-105 transition">
            <Users className="w-12 h-12 text-yellow-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Community Driven</h3>
            <p className="text-gray-600 mt-2">
              Connect with fellow readers, share reviews, and recommend your favorites.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFF6E0] rounded-xl shadow-md p-6 hover:scale-105 transition">
            <Globe className="w-12 h-12 text-yellow-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Global Reach</h3>
            <p className="text-gray-600 mt-2">
              Discover books loved by readers worldwide and expand your knowledge.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-10 text-md">
          🌟 Our mission is simple: to make finding books as delightful.
        </p>
      </div>
    </section>
  );
}

export default About;
