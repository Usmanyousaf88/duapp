import { useState, useEffect } from "react";
import { ArrowLeft, RefreshCw, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const Tasbih = () => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(() => {
    const savedTotal = localStorage.getItem('tasbihTotal');
    return savedTotal ? parseInt(savedTotal) : 0;
  });

  useEffect(() => {
    localStorage.setItem('tasbihTotal', totalCount.toString());
  }, [totalCount]);

  const handleTap = () => {
    setCount(prev => prev + 1);
    setTotalCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#4EC492] text-white p-4 flex items-center">
        <Link to="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Tasbih räknare</h1>
      </div>

      <div className="p-4">
        <div className="flex justify-center gap-4 mb-16">
          <button onClick={handleReset} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-gray-400" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
            <Volume2 className="w-6 h-6 text-gray-400" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
            <div className="w-6 h-6 text-gray-400">⚡</div>
          </button>
        </div>

        <div className="text-center mb-20">
          <div className="text-gray-500 uppercase text-sm mb-3">Total</div>
          <div className="text-[#4EC492] text-5xl font-bold">{totalCount}</div>
        </div>

        <button
          onClick={handleTap}
          className="w-64 h-64 mx-auto mt-32 rounded-full border-[12px] border-gray-100 flex items-center justify-center text-gray-400 text-xl"
        >
          {count === 0 ? "Tap Here" : count}
        </button>
      </div>
    </div>
  );
};

export default Tasbih;