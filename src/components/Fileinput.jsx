import { useRef } from "react";

const Fileinput = () => {
  const fileInputRef = useRef(null);

  return (
    <div>
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => console.log(e.target.files)}
      />

      {/* SVG Icon as a Button */}
      <button
        onClick={() => fileInputRef.current.click()}
        className="p-2 rounded-full hover:bg-blue-900 m-1 mask-b-from-amber-100 transition"
      >
        {/* Inline SVG for paperclip / file icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.5 12.5L9.621 19.379a4.5 4.5 0 01-6.364-6.364l8.485-8.485a3 3 0 114.243 4.243l-8.485 8.485a1.5 1.5 0 102.121 2.121L17 11"
          />
        </svg>
      </button>
    </div>
  );
};

export default Fileinput;
