
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { motion } from "framer-motion";

function Color() {
  const [color, setColor] = useState("#ff0000");
  const [palette, setPalette] = useState([]);

  const addToPalette = () => {
    if (!palette.includes(color)) setPalette([...palette, color]);
  };
  
  return (
    // color studio 
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🎨 Color Studio</h1>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-80">
        <HexColorPicker color={color} onChange={setColor} />
        <p className="text-center mt-3 text-lg font-semibold">{color}</p>

        <button
          onClick={addToPalette}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl"
        >
          Add to Palette
        </button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {palette.map((c, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 rounded-xl shadow-md cursor-pointer"
            style={{ backgroundColor: c }}
            whileHover={{ scale: 1.1 }}
            title={c}
          />
        ))}
      </div>
    </div>
  );
}

export default Color