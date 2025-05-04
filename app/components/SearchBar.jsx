'use client';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onSearch(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <input
        type="text"
        className="border border-blue-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Enter antisemitic claim..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg hover:opacity-90 transition"
      >
        Refute
      </button>
    </form>
  );
}
