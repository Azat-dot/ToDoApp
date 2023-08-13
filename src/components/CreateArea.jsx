import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Zoom } from "@material-ui/core";
import { Fab } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [text, setNewText] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function newText() {
    setNewText(true);
  }

  return (
    <div>
      <form className="create-note">
        {text ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Название"
          />
        ) : null}

        <textarea
          name="content"
          onClick={newText}
          onChange={handleChange}
          value={note.content}
          placeholder="Пишите ваши заметки..."
          rows={text ? 3 : 1}
        />

        <Zoom in={text}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
