import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, image, description });

    fetch("http://localhost:4400", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name,image,description})
    })
    .then(x=>navigate("/"))
    
  }
  function handleChange(e, stateChanger) {
    stateChanger(e.target.value);
  }
  return (
    <div>
      <Link to="/">go home</Link>

      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />
        <input
          type="text"
          value={image}
          onChange={(e) => handleChange(e, setImage)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => handleChange(e, setDescription)}
        />
        <button>Add card</button>
      </form>
    </div>
  );
}

export default Add;
