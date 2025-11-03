'use client';

import { useState } from "react";

const testimoniesInitial = [
  {
    name: "Sarah M.",
    content:
      "I'm blown away by the quality and beauty of the flowers I received from Noona Florist. From charming bouquets to elegant arrangements, every piece I’ve ordered has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    content:
      "Finding the perfect flowers for any occasion used to be a challenge until I discovered Noona Florist. Their stunning selection caters to a variety of styles and moments, making every arrangement truly special.",
    rating: 4,
  },
  {
    name: "James L.",
    content:
      "As someone who always looks for unique and stunning floral arrangements, I’m thrilled to have discovered Noona Florist. Their selection of flowers is not only diverse but also beautifully crafted for every occasion.",
    rating: 5,
  },
];

export default function TestimoniPage() {
  const [testimonies, setTestimonies] = useState(testimoniesInitial);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5); // default rating

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim() || rating < 1 || rating > 5) return;

    const newTestimony = { name, content, rating };
    setTestimonies([...testimonies, newTestimony]);
    setName("");
    setContent("");
    setRating(5);
  };

  return (
    <div className="min-h-screen bg-pink-300 text-gray-900 px-6 py-10">
      <h1 className="font-pacifico text-3xl font-bold text-center mb-10">Testimoni</h1>

      {/* Daftar Testimoni */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {testimonies.map((item, idx) => (
          <div key={idx} className="bg-white text-gray-800 rounded-lg p-6 shadow-md">
            <div className="text-yellow-400 text-lg mb-2">
              {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
            <p className="text-sm mb-4">"{item.content}"</p>
            <p className="font-semibold">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Form Tambah Testimoni */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 shadow-md max-w-xl mx-auto"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Tambah Testimoni</h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Nama Anda"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Testimoni</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Tulis testimoni Anda..."
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                className={`text-2xl ${
                  rating >= num ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(num)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md w-full"
        >
          Kirim Testimoni
        </button>
      </form>
    </div>
  );
}
