'use client';
import { useState } from 'react';

export default function AddPage() {
  const [claim, setClaim] = useState('');
  const [refutation, setRefutation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!claim.trim() || !refutation.trim()) return;

    // (שלב מתקדם יותר: שמירה לדאטה בצד שרת)
    setMessage('Your suggestion was submitted!');
    setClaim('');
    setRefutation('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl mb-8">Suggest a New Refutation</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter antisemitic claim..."
          className="border p-3 rounded"
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
        />
        <textarea
          placeholder="Enter factual refutation..."
          className="border p-3 rounded"
          value={refutation}
          onChange={(e) => setRefutation(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-6 text-green-700">{message}</p>}
    </div>
  );
}
