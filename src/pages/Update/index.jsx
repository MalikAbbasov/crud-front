import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const {id} = useParams()

  async function getUsersById(id) {
    const data = await fetch("http://localhost:4400/"+id)
    const res = await data.json()
    setName(res.name)
    setImage(res.image)
    setDescription(res.description)
  }

  useEffect(() => {
    getUsersById(id)
  }, [id])
  

  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, image, description });

    fetch("http://localhost:4400/"+id, {
      method: "put",
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
  )
}

export default Update