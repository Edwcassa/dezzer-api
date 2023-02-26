import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {

  const location = useLocation()
  const path = location.pathname.split('/')[1]
  console.log(path)

  const rutaA = [
    { "name": "Artistas", "link": "artistas" },
    { "name": "Albumes", "link": "albumes" },
    { "name": "Canciones", "link": "canciones" },
    { "name": "Estaciones", "link": "estaciones" }
  ]
  const rutaB = [
    { "name": "Metal", "link": "metal" },
    { "name": "Para bailar", "link": "bailar" },
    { "name": "Rock 90s", "link": "rock" },
    { "name": "Baladas", "link": "baladas" }
  ]
  
  // bg-lime-200
  return (
    <>
      <div className=' w-[300px] bg-[#662323] pl-8 text-white'>

        <img className=' w-40 mt-10 mb-5' src="https://i.postimg.cc/L8PgZ1rm/foxbel-music.png" alt="" />

        <p className=' text-xl mb-2'>Mi libreria</p>
        <div>
          {rutaA.map((e, i) => (
            <Link key={i} to={e.link}>
              <p className={`${path == e.name.toLowerCase() ? ' border-l-4 border-red-400 text-red-400 pl-2' : ''}`}>{e.name}</p>
            </Link>
          ))}
        </div>

        <p className=' text-xl mt-8 mb-2'>Playlist</p>
        <div>
          {rutaB.map((e, i) => (
            <Link key={i} to={e.link}>
              <p className={`${path == e.name.toLowerCase() ? ' border-l-4 border-red-400 text-red-400 pl-2' : ''}`}>{e.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
