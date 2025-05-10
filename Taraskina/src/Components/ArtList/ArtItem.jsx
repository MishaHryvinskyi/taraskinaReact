import { ListItem, ItemTitle, Img } from "./ArtItem.styled";

const ArtItem = ({paintsList : { name, url }}) => {
    return (
        <ListItem>
            <ItemTitle>{name}</ItemTitle>
            <Img src={url} alt={name} width='200'/>
            {/* <h3>{year} рік</h3>
            <p>Розмір: {size}</p> */}
        </ListItem>
    )
}

export default ArtItem;