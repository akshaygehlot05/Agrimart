const ModeToggle = ({ mode, setMode }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setMode("B2C")}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Retail
      </button>

      <button
        onClick={() => setMode("B2B")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Wholesale
      </button>
    </div>
  );
};

export default ModeToggle;