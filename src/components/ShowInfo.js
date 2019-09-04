import React, { useEffect, useState } from "react"
import axios from "axios"

const ShowInfo = props => {
  const [cast, setCast] = useState([])

  const getData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${props.match.params.id}/credits?api_key=69c1a45744d9a7753c8d244cd65b2c65&language=en-US`
    )

    setCast(res.data.cast)
    console.log(res)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ul>
      {cast.map((member, i) => {
        return <li key={i}>{member.character}</li>
      })}
    </ul>
  )
}

export default ShowInfo
