import React, { useEffect, useLayoutEffect, useState } from "react";
import Note from "./Note";

const handleGetNotes = () => {
  let list = localStorage.getItem("note");

  if (list) {
    return JSON.parse(localStorage.getItem("note"));
  } else {
    return [];
  }
};

const NotesCrud = () => {
  const [fetchedNotes, setFetcheNotes] = useState(handleGetNotes());

  const handleAddNote = () => {
    const note = "";
    setFetcheNotes((prevVal) => [...prevVal, note]);
    console.log(fetchedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(fetchedNotes));
  }, [fetchedNotes]);
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#c8d8e4"
});

  return (
    <div className="h-screen">
       <h1 className="text-2xl  italic font-bold uppercase text-center p-4 bg-[#52ab98] text-white  font-serif">
           Notes App
        </h1>
      <div className="flex flex-col pt-4  items-center justify-center">
        <button
          className="bg-[#52ab98] text-white px-6 py-2 rounded-md my-6 hover:bg-[#31665b ] shadow-lg font-semibold cursor-pointer transition-all duration-100"
          onClick={handleAddNote}
        >
          + Add note
        </button>
      </div>

      <div className="flex flex-wrap justify-between w-[90%] mx-auto">
        {fetchedNotes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index + 1}
              note={note}
              setFetcheNotes={setFetcheNotes}
              fetchedNotes={fetchedNotes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotesCrud;
