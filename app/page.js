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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Fight Antisemitism</h1>
      <SearchBar onSearch={handleSearch} />
      <RefutationResult refutation={result} />
    </div>
  );
}
