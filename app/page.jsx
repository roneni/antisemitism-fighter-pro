'use client';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RefutationResult from './components/RefutationResult';
import refutations from './data/refutations.json';

export default function Home() {
  const [result, setResult] = useState('');

  const handleSearch = (query) => {
    const found = refutations.find((item) =>
      item.claim.toLowerCase().includes(query.toLowerCase())
    );
    if (found) {
      setResult(found.refutation);
    } else {
      setResult('No matching refutation found.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl mb-8">Fight Antisemitism</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Enter a claim to instantly get a strong, factual refutation.
      </p>
      <div className="w-full max-w-md">
        <SearchBar onSearch={handleSearch} />
        <RefutationResult refutation={result} />
      </div>
    </div>
  );
}
