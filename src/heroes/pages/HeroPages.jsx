import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers"

export const HeroPages = () => {
  const { id } = useParams()
  const hero = getHeroeById(id)

  if (!hero) return <Navigate to="/marvel" />

  return (
    <h1>HeroPages</h1>
  )
}
