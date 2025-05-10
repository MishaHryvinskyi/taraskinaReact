import { useEffect, useState } from "react"
import { getPaintsById } from "../API/api"
import { useParams } from "react-router-dom";

const OneArt = () => {
  const [item, setItem] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getPaintsById(id)
      .then(data => {
        console.log("Fetched item:", data)
        setItem(data)
      })
      .catch(err => {
        console.error("Error loading item:", err)
      })
  }, [id])


  return (
    <>
    {item ? (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <img src={item.url} alt={item.name} width='400'/>
      <p>Розмір: {item.size}</p>
      <p>Рік: {item.year}</p>
    </div>
    ) : (
    <p>Помилка</p>
    )}
    </>
  )
}

export default OneArt