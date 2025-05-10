import ArtItem from "./ArtItem";
import { List } from "./ArtList.styled";
import { useEffect, useState } from "react"
import { getPaints } from "../../API/api"
import { ClipLoader } from 'react-spinners'
import { MainContainer } from "../../Container.styled"

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved'
};

const ArtList = () => {
  const [paintsList, setPaintsList] = useState(null);
   const [status, setStatus] = useState(Status.IDLE);

   useEffect(() => {

    setStatus(Status.PENDING)
    getPaints()
    .then(data => {
      setPaintsList(data);
      setStatus(Status.RESOLVED)
      console.log(data)
    })
    .catch(err => {
      setStatus(Status.REJECTED);
      console.log(err)
    })
  
   },[]);

   if(status === Status.IDLE) {
    return <p>Очікуємо...</p>
  }

  if(status === Status.PENDING) {
    return <ClipLoader color="#36d7b7" size={50} />
  }

  if(status === Status.REJECTED) {
    return <p>Помилка!</p>
  }

  if(status === Status.RESOLVED) {
    return <List>
    {paintsList.paints.map(item => 
      <ArtItem key={item._id} paintsList={item}/>
    )}
  </List>
  }

}

export default ArtList;