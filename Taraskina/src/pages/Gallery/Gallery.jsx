import ArtItem from "../../components/ArtList/ArtItem";
import { List } from "../../components/ArtList/ArtList.styled";
import { MainContainer } from "../../Container.styled"
import { useEffect, useState } from "react"
import { getPaints } from "../../API/api"
import { ClipLoader } from 'react-spinners'
import { ListArt } from "./Gallery.styled";

const Status = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved'
};

const Gallery = () => {
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

  if(status === Status.PENDING) {
    return <ClipLoader color="#36d7b7" size={50} />
  }

  if(status === Status.REJECTED) {
    return <p>Помилка!</p>
  }

  if(status === Status.RESOLVED) {
    return (
      <MainContainer>
         <List>
            {paintsList.paints.map(item => 
            <ListArt key={item._id} to={`${item._id}`}>
                 <ArtItem paintsList={item}/>
            </ListArt>
            )}
        </List>
      </MainContainer>
    )
  }

}

export default Gallery;