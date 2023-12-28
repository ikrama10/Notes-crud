import React, { useEffect, useState } from "react";
import {
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Note = ({ id, note, setFetcheNotes, fetchedNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (noteId) => {
    setIsEditing(false);
    setFetcheNotes((prevVal) => {
      return prevVal.map((note, index) => {
        if (noteId === index + 1) {
          return newNote;
        } else {
          return note;
        }
      });
    });
  };
  useEffect(() => {
    setNewNote(note);
  }, [note]);
  const handleDel = (noteId) => {
    const updatedNote = fetchedNotes.filter(
      (note, index) => noteId !== index + 1
    );
    setFetcheNotes(updatedNote);
  };
  return (
    <>
      <div
         className=" min-h-[380px] w-[30%] bg-white box-border rounded  shadow-xl overflow-hidden mt-10 "
      >
        <div className="bg-[#52ab98] p-3 text-white font-semibold flex justify-end">

          <div>
            {isEditing ? (
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-white h-5 cursor-pointer"
                onClick={() => handleSave(id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-white h-5 cursor-pointer"
                onClick={handleEdit}
              />
            )}

            <FontAwesomeIcon
              icon={faTrashCan}
              className="text-white h-5 ml-4 cursor-pointer"
              onClick={() => handleDel(id)}
            />
          </div>
        </div>
        {isEditing ? (
          <textarea
            className="resize-none h-full w-full outline-none p-3 text-2xl"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></textarea>
        ) : (
          <h3 className="p-3 text-base">{newNote}</h3>
        )}
      </div>
    </>
  );
};

export default Note;
