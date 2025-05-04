export default function RefutationResult({ refutation }) {
  if (!refutation) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Refutation:</h2>
      <p>{refutation}</p>
    </div>
  );
}
