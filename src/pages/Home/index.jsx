import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Home() {
    const [cards, setCards] = useState([])

    useEffect(() => {
      getUsers()
    }, [])
    
  async function getUsers() {
    const data = await fetch("http://localhost:4400")
    const res = await data.json()
    setCards(res)
  }
  async function delUsers(id) {
     await fetch("http://localhost:4400/"+id, { method: 'DELETE' })
     await getUsers()
  }
  return (
    <div>
        <Link to="/add">add page</Link>
        <br />
        <Link to="/update">update page</Link>
              {
        cards.map(x=>(
          <ul key={x._id}>
            <img src={x.image} alt="" />
            <li>{x.name}</li>
            <Link to={"/update/"+x.id}><button>updata</button></Link>
            <button onClick={()=>delUsers(x._id)}>del</button>
          </ul>
        ))
      }
    </div>
  )
}

export default Home