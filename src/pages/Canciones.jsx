import { useEffect, useState } from "react"

export default function Canciones() {

  const [data, setData] = useState(null)
  const [load, setLoad] = useState(false)

  async function getData() {
    setLoad(true)
    const url1 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135551"
    const url2 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135572"
    const url3 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135613"
    const url4 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135634"
    const url5 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135655"
    const url6 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135680"
    const url7 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135699"
    const url8 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135715"
    const url9 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135730"
    const url10 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/313750"

    const responses = await Promise.all([
      fetch(url1), fetch(url2), fetch(url3),
      fetch(url4), fetch(url5), fetch(url6),
      fetch(url7), fetch(url8), fetch(url9), fetch(url10),
    ])

    const data1 = await responses[0].json()
    const data2 = await responses[1].json()
    const data3 = await responses[2].json()
    const data4 = await responses[3].json()
    const data5 = await responses[4].json()
    const data6 = await responses[5].json()
    const data7 = await responses[6].json()
    const data8 = await responses[7].json()
    const data9 = await responses[8].json()
    const data10 = await responses[9].json()

    setData([data1, data2, data3, data4, data5, data6, data7, data8, data9, data10])
    setLoad(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className=" grid grid-cols-4">
        {load && <span>Loading...</span>}
        {
          data &&
          data.map((e, i) => (
            <div key={i}>
              <img src={e.artist.picture} alt="" />
              <span>{e.title_short}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}
