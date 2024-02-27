import React, { useState } from "react";

const InputArea = () => {
  const [sentence, setSentence] = useState("");
  const [sentenceList, setSentenceList] = useState([]);

  const handleChange = (e) => {
    setSentence(e.target.value);
  };

  const handleAddSentence = () => {
    if (sentence.trim() !== "") {
      setSentenceList([...sentenceList, sentence]);
      setSentence("");
    }
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Enter a sentence"
        value={sentence}
        onChange={handleChange}
      ></textarea>
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddSentence}
      >
        Add Sentence
      </button>
      <ul className="mt-4">
        {sentenceList.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputArea;
